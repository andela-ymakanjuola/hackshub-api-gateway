var request = require('request'),
    config = require('./config');

module.exports = function (req, res, next) {
  
  request
    .get({
      url: config.route[process.env.NODE_ENV].users.url+ "authenticate",
      headers: req.headers
    },
      function (error, httpResponse, body) {
        if (error) {
          res
            .json(error);
        }
        else if (body === "\"UserAuthorized\""){
          next();
        }
        else {
          console.log(body);
            res
              .json(body);
        }
    });

}