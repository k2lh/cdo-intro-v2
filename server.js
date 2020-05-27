/* eslint-disable */
const events = require('events');
const express = require('express');
const history = require('connect-history-api-fallback');
const apiCache = require('apicache');
const compression = require('compression');
const os = require('os');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const router = express.Router();
const jwt = require('jsonwebtoken');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const MemoryStore = require('session-memory-store')(session);
const passport = require("passport");

const DEBUG=false;
const MAX_URLS = 100;
const CACHE_TIME = 10;

const productionAppName = 'saa';
const port = (process.env.VCAP_APP_PORT || process.env.PORT || 3000);
const appInfo = JSON.parse(process.env.VCAP_APPLICATION || "{}");
    console.log('productionAppName:', productionAppName, ' && env:', process.env.NODE_ENV);
const appHost = process.env.VCAP_APPLICATION && JSON.parse(process.env.VCAP_APPLICATION).application_uris[0] || 'localhost';
const apiEndPoint = 'https://saa.stage1.domain.net/api';

let hostUri = 'http://localhost:' + port;
let appName = 'local';
if (process.env.VCAP_APPLICATION) {
  let appVar = JSON.parse(process.env.VCAP_APPLICATION);
  hostUri = appVar.application_uris[0]; // Take any URI from the list, any will work
  appName = appVar.application_name;
}
const loopEndPoint = hostUri + '/api';
    console.log('App: ', appName, ' hostUri: ', hostUri);
if (DEBUG) console.log('Env: ', process.env);

/* Initialization */
const app = express();
const cache = apiCache.middleware;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(cookieParser());
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "withCredentials": true
}));

/* See http://expressjs.com/en/api.html#trust.proxy.options.table */
app.enable('trust proxy');
app.use(function (req, res, next) {
  const runOncloud = () => {
    return appName.includes('saa');
  }
  if (!req.secure && runOncloud()) {
    console.log('---------------- NOT secure, on cloud');
    res.redirect('https://' + req.headers.host + req.url);
  } else {
    next();
  }
});

/* Caching */
if (appName === productionAppName) {
  console.log('Server caching enabled');
  app.use(cache(CACHE_TIME * 60));
} else {
  console.log('Server caching disabled outside of production');
}
class CacheManager {
  constructor() {
    this.CACHING_TIME = CACHE_TIME * 60 * 1000;     // in ms
    this.REPEAT_DELAY = this.CACHING_TIME + 10000;  // Give 30s response time
    this.lastCalledUrls = [];
  }
  pushUrl(req) {
    if (DEBUG) console.log('pushUrl ', req.url, this.lastCalledUrls.length);
    if (req.method !== 'GET') {
      if (DEBUG) console.log('request is not a get, not caching that call');
      return;
    }
    if (DEBUG) console.log('request is a get, proceeding');
    if (this.lastCalledUrls.length >= MAX_URLS) {
      let bin = this.lastCalledUrls.shift();
      if (DEBUG) console.log((new Date()).toLocaleString(),
                             'removing entry from the list', bin.url);
    }
    if (!this.alreadyPushed(req)) {
      if (DEBUG) console.log((new Date()).toLocaleString(),
                              'pushing new URL into the pool', req.url);
      this.lastCalledUrls.push(req);
      this.scheduleRequest(req);
    } else {
      if (DEBUG) console.log((new Date()).toLocaleString(),
                             'URL is already in the pool, ignoring', req.url);
    }
  }
  alreadyPushed(req) {
    if (!req) {
      throw('provide a URL to CacheManager.alreadyPushed()');
    }
    let res = this.lastCalledUrls.find(request => {
      return request.url === req.url;
    }) ? true : false;
    return res;
  }
  scheduleRequest (req) {
    if (DEBUG) console.log('scheduleRequest', req.url);
    setTimeout(this.repeatRequest.bind(this), this.REPEAT_DELAY, req);
  }
  repeatRequest (req, context) {
    if (DEBUG) console.log('repeatRequest', req.url);
    if (this.alreadyPushed(req)) {
      const localUrl = loopEndPoint + req.url;
      let payload = { qs: req.query, headers: { 'XReplay': true } };
      req.headers['XReplay'] = 'true';
      req.pipe(request.get(localUrl, payload));
      this.scheduleRequest(req);
    } else {
      if (DEBUG) console.log('request seems to have fallen out of the list', req.url);
      // No need for caching in other cases, and even less repeating
    }
  }
}
cacheManager = new CacheManager();

const samlConfig = require('./configserve/saml')[process.env.SSO_PROFILE || appInfo.space_name || 'dev'];

app.use('/api/lock', require('./routes/lockpoints')(app, samlConfig, passport));
app.use('/api/open', require('./routes/openpoints')(app));

app.use(session({
  secret: samlConfig.passport.sessionSecret || 'SAML support for cloud',
  cookie: { path: '/', httpOnly: true, secure: !!samlConfig.passport.saml,  maxAge: null },
  resave: true,
  proxy: true,
  saveUninitialized: true,
  store: new MemoryStore()
}));
app.use(passport.initialize());
app.use(passport.session());
require('./lib/passport')(passport, samlConfig);

/* Front End */
app.use(history({index: '/index.html'}));
app.use(compression());
app.use('/', express.static(__dirname + '/dist'));

app.post('/auth/login/callback/postResponse', passport.patchResponse(), passport.authenticate(samlConfig.passport.strategy), function(req, res, next) {
    console.log(' >>> HAS CALLBACK <<<');
    var oneDay = 24 * 3600 * 1000;
    var w3token = jwt.sign({uid:req.user.uid, displayName: req.user.displayName}, samlConfig.passport.sessionSecret, {expiresIn: '13h' });
    if (req.user.Groups.includes('saa')) {
      res.cookie('groupTeam', 'team', { expires: new Date(Date.now() + oneDay) });
    };
    if (req.user.Groups.includes('dashing-panther')) {
      res.cookie('groupDash', 'dash', { expires: new Date(Date.now() + oneDay) });
    };
    res.cookie('displayName', req.user.displayName, { expires: new Date(Date.now() + oneDay) });
    res.cookie('email', req.user.email, { expires: new Date(Date.now() + oneDay) });
    res.cookie('userid', req.user.id, { expires: new Date(Date.now() + oneDay) });
    res.cookie('token', w3token, { expires: new Date(Date.now() + oneDay) });
    res.redirect('/');
});

app.listen(port, function() { console.log('zipzipzip on port ' + port); });
