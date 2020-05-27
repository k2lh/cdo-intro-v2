const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const request = require('request');

const appHost = process.env.VCAP_APPLICATION && JSON.parse(process.env.VCAP_APPLICATION).application_uris[0] || 'localhost';

var relayHandler = function relayHandler(req, res) {
    var relayState = req.query && req.query.RelayState || req.body && req.body.RelayState;
    var hashQuery = relayState && relayState.match(/^\#/) && ('/app'+relayState) || relayState  || '/auth';
    res.redirect(hashQuery);
};

module.exports = function(app, config, passport) {

  router.get('/', function(req, res, next) {
    console.log('--- >>> --- >>> --- >>> --- PROFILE ');
    if (req.user) {
      var token = req.headers['authorization'] || req.body.token || req.query.token || '';
      req.user.token = jwt.sign({uid:req.user.uid, displayName: req.user.displayName}, config.passport.sessionSecret, {expiresIn: '13h' });
      var groupSdaState = req.user.Groups.includes('saa');
      var groupDashState = req.user.Groups.includes('dashing-panther');
      var result = {
        displayName: req.user.displayName,
        email: req.user.email,
        userid: req.user.id,
        token: req.user.token,
        groupTeam: groupSdaState,
        groupDash: groupDashState
      };
      res.json(result);
    } else {
      console.log('xxxxx NO USER xxxxxx');
      res.redirect('/');
    }
  });

  // Process callback from IDP for login
  router.post('/login/callback/postResponse', passport.patchResponse(), passport.authenticate(config.passport.strategy), function(req, res, next) {
      console.log(' >>> HAS CALLBACK <<<');
      next();
  });

  return router;
};
