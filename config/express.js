var express = require('express');
   
module.exports = function () {
  var app = express(),
      bodyParser = require('body-parser'),
      config = require('./config'),
      router = require('../app/gateway/routes/gateway.route');

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use('/',router);

  return app;
  
};