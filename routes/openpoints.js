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
const gittoken = '';

module.exports = function(app) {

  router.use('/', function(req, res, next) {
    var githubtoken = jwt.sign({ iss: gitAppId }, gitcert, {algorithm: 'RS256', expiresIn: '10m'});
    return request({
      method: 'POST',
      json: true,
      url: 'https://github.xxx.com/api/v3/installations/40/access_tokens',
      headers: {
        'user-agent': 'saa',
        'Authorization': 'Bearer ' + githubtoken,
        'Accept': 'application/vnd.github.machine-man-preview+json' // 'application/vnd.github.v3+json'
      }
    }, (error, response, body) => {
      if (error) {
        return res.send({ success: false, data: body });
      }
      res.locals.token = body.token;
      next();
    });
  });

  router.get("/patterns", function(req, res, next) {
    console.log(' >>> get patterns');
    console.log(res.locals.token);
    request({
      method: 'GET',
      url: 'https://github.xxx.com/api/v3/repos/YYY/Analytics-Request-Patterns/contents/index.json',
      headers: {
        'user-agent': 'saa',
        'Content-Type': 'application/json',
        'Authorization': 'token ' + res.locals.token,
        'Accept': 'application/vnd.github.v3.raw'
      }
    }, (error, response, body) => {
      return res.status(200).send(body);
    });
  });

  router.get("/onepattern/:path", function(req, res, next) {
    var path = req.params.path;
    request({
      method: 'GET',
      url: 'https://github.xxx.com/api/v3/repos/YYY/Analytics-Request-Patterns/contents/' + path,
      headers: {
        'user-agent': 'saa',
        'Content-Type': 'application/json',
        'Authorization': 'token ' + res.locals.token,
        'Accept': 'application/vnd.github.v3.raw'
      }
    }, (error, response, body) => {
      if (error) {
        return res.send({ success: false, data: body });
      }
      var result = markedIt.generate(body);
      var data = {
        text: result.html.text,
        author: result.properties.document.frontMatterMap.author,
        keywords: result.properties.document.frontMatterMap.keywords,
        title: result.properties.document.frontMatterMap.title,
        public: result.properties.document.frontMatterMap.public,
        published: result.properties.document.frontMatterMap.published,
        description: result.properties.document.frontMatterMap.description
      }
      return res.status(200).send(data);
    });
  });

  router.get("/projects", function(req, res, next) {
    request({
      method: 'GET',
      url: 'https://github.xxx.com/api/v3/repos/YYY/Team-all/contents/projects/index.json',
      headers: {
        'user-agent': 'saa',
        'Content-Type': 'application/json',
        'Authorization': 'token ' + res.locals.token,
        'Accept': 'application/vnd.github.v3.raw'
      }
    }, (error, response, body) => {
      if (error) {
        return res.send({ success: false, data: body });
      }
      return res.status(200).send(body);
    });
  });

  router.get("/oneproject/:path", function(req, res, next) {
    var path = req.params.path;
    request({
      method: 'GET',
      url: 'https://github.xxx.com/api/v3/repos/YYY/Team-All/contents/projects/' + path + '.json',
      headers: {
        'user-agent': 'saa',
        'Content-Type': 'application/json',
        'Authorization': 'token ' + res.locals.token,
        'Accept': 'application/vnd.github.v3.object'
      }
    }, (error, response, body) => {
      if (error) {
        return res.send({ success: false, data: response });
      } else {
        return res.status(200).send(body);
      }
    });
  });

  router.put("/oneproject/new/:path", function(req, res, next) {
    var path = req.params.path;
    var data = {
      'message': 'created by ' + req.body.name,
      'committer': {
        'name': req.body.name,
        'email': req.body.email
      },
      'content': req.body.content
    };
    var stringData = JSON.stringify(data);
    request({
      method: 'PUT',
      url: 'https://github.xxx.com/api/v3/repos/YYY/Team-All/contents/projects/' + path + '.json',
      body: stringData,
      headers: {
        'user-agent': 'saa',
        'Content-Type': 'application/json',
        'Authorization': 'token ' + res.locals.token,
        'Accept': 'application/vnd.github.v3.raw'
      }
    }, (error, response, body) => {
      if (error) {
        return res.send({ success: false, data: body });
      }
      return res.status(200).send(body);
    });
  });

  router.put("/oneproject/update/:path", function(req, res, next) {
    var path = req.params.path;
    var data = {
      'message': req.body.name + ' via webapp',
      'content': req.body.content,
      'sha': req.body.sha,
      'committer': {
        'name': req.body.name,
        'email': req.body.email
      }
    };
    var stringData = JSON.stringify(data);
    request({
      method: 'PUT',
      body: stringData,
      url: 'https://github.xxx.com/api/v3/repos/YYY/Team-All/contents/projects/' + path + '.json',
      headers: {
        'user-agent': 'saa',
        'Content-Type': 'application/json',
        'Authorization': 'token ' + res.locals.token,
        'Accept': 'application/vnd.github.v3.raw'
      }
    }, (error, response, body) => {
      if (error) {
        return res.send({ success: false, data: body });
      }
      return res.status(200).send(body);
    });
  });

  router.get("/oneproject/check/:path", function(req, res, next) {
    var path = req.params.path;
    request({
      method: 'GET',
      url: 'https://github.xxx.com/api/v3/repos/YYY/Team-All/contents/projects/',
      headers: {
        'user-agent': 'saa',
        'Content-Type': 'application/json',
        'Authorization': 'token ' + res.locals.token,
        'Accept': 'application/vnd.github.v3.raw'
      }
    }, (error, response, body) => {
      if (error) {
        return res.send({ success: false, data: response });
      }
      return res.status(200).send(body);
    });
  });

  router.get("/milestones/:repo", function(req, res, next) {
    console.log(' >>> get milestones');
    console.log(res.locals.token);
    var repo = req.params.repo;
    request({
      method: 'GET',
      url: 'https://github.xxx.com/api/v3/repos/YYY/' + repo + '/milestones',
      headers: {
        'user-agent': 'saa',
        'Content-Type': 'application/json',
        'Authorization': 'token ' + res.locals.token,
        'Accept': 'application/vnd.github.v3.raw'
      }
    }, (error, response, body) => {
      return res.status(200).send(body);
    });
  });


  return router;
};
