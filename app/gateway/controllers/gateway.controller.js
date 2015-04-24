var request = require('request'),
    config = require('../../../config/config');

module.exports = {

  login: function(req, res) {

    request
      .post(config.route[process.env.NODE_ENV].users.url + "login", function (error, httpResponse, body) {
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
      .post(config.route[process.env.NODE_ENV].users.url + "signup", function (error, httpResponse, body) {
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

  deleteUser: function (req, res) {
    
    request
      .del({
        url: config.route[process.env.NODE_ENV].users.url+ "users/" + req.params.username,
        headers: req.headers
      },
        function (error, httpResponse, body) {
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


  createNotification: function(req, res) {

    request
      .post(config.route[process.env.NODE_ENV].notification.url + req.params.username +"/notifications",function (error, httpResponse, body) {
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

  readNotification: function(req, res) {

    request
      .get(config.route[process.env.NODE_ENV].notification.url + req.params.username + "/notifications/" + req.params.notification_id, function (error, httpResponse, body) {
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
      .get({
        url: config.route[process.env.NODE_ENV].notification.url + req.params.username + "/notifications", 
        qs: req.query
      }, 
        function (error, httpResponse, body) {

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

  updateNotification: function(req, res) {

    request
      .put(config.route[process.env.NODE_ENV].notification.url + req.params.username + "/notifications/" + req.params.notification_id, function (error, httpResponse, body) {
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

  deleteNotification: function(req, res) {

    request
      .del(config.route[process.env.NODE_ENV].notification.url + req.params.username + "/notifications/" + req.params.notification_id, function (error, httpResponse, body) {
         if (error) {
            res
              .json(error);
          }
          else {
            res
              .json(JSON.parse(body));
          }
      });
  }
};
