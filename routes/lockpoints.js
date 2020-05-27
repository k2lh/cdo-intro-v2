const express = require('express');
const router = express.Router();
const request = require('request');
const jwt = require("jsonwebtoken");
const fs = require('fs');
const markedIt = require("marked-it-core");

const client_id = 'Iv1.baa5d10b982e11e4';
const client_secret = '5ddde5aa0e392a44e5e78af805515da174790871';
const gitcert = fs.readFileSync('./certs/saa.private-key.pem');
const gitAppId = 15;

var thistoken = '';

module.exports = function(app, config, passport) {
  // validate JWT on all API calls
  router.use('/', function(req, res, next) {
    var token = req.headers['authorization'] || req.body.token || req.query.token || '';
    jwt.verify(token, config.passport.sessionSecret, function(err, decoded) {
      if (err) {
        console.log(' *** checkToken ---- Failed to authenticate token', err);
        return res.status(403).send({ success: false, message: 'Failed to authenticate token.' });
      } else {
        if (decoded && decoded.uid) {
          console.log(' √ checkToken --- SUCCESS');
          req.user = {uid: decoded.uid, displayName: decoded.displayName};
          next();
        } else {
          console.log(' *** checkToken --- Invalid ID in token');
          return res.status(403).send({success: false,message: 'Invalid ID in token'});
        }
      }
    });
  });

  return router;
};
