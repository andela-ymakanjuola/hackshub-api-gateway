var request = require('request'),
    config = require('../../../config/config');

module.exports = {

  login: function(req, res) {

    request
      .post(config.route[process.env.NODE_ENV].users.url + "/login", function (error, httpResponse, body) {
        if (error) {
          res
            .json(error);
        }
        else {
          res
            .json(JSON.parse(body));
        }
      })
      .form(req.body);

      

  },

  createUser: function(req, res) {

    request
      .post(config.route[process.env.NODE_ENV].users.url + "/signup", function (error, httpResponse, body) {
        if (error) {
          res
            .json(error);
        }
        else {
          res
            .json(JSON.parse(body));
        }

      })
      .form(req.body);

  },

  createNotification: function(req, res) {

    request
      .post(config.route[process.env.NODE_ENV].url + "/notifications",function (error, httpResponse, body) {
        if (error) {
          response
            .json(error);
        }
        else {
          response
            .json(JSON.parse(body));
        }
      })
      .form(req.body);

  },

  readNotification: function(req, res) {

    request
      .get(config.route[process.env.NODE_ENV].url + "/notifications/:notification_id", function (error, httpResponse, body) {
         if (error) {
            res
              .json(error);
          }
          else {
            res
              .json(JSON.parse(body));
          }
      });

  },

  readAllNotifications: function(req, res) {

    request
      .get(config.route[process.env.NODE_ENV].url + "/notifications", function (error, httpResponse, body) {
         if (error) {
            response
              .json(error);
          }
          else {
            response
              .json(JSON.parse(body));
          }
      });

  },

  updateNotification: function(req, res) {

    request
      .post(config.route[process.env.NODE_ENV].url + "/notifications/:notification_id", function (error, httpResponse, body) {
         if (error) {
            response
              .json(error);
          }
          else {
            response
              .json(JSON.parse(body));
          }
      });

  },

  deleteNotification: function(req, res) {

    request
      .post(config.route[process.env.NODE_ENV].url + "/notifications/:notification_id", function (error, httpResponse, body) {
         if (error) {
            response
              .json(error);
          }
          else {
            response
              .json(JSON.parse(body));
          }
      });
  },
}
