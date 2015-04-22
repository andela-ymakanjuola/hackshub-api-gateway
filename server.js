var config = require('./config/config'),
    app = require('./config/express')();

console.log(config.route[process.env.NODE_ENV].users.url + "/login");

app.listen(config.port, function (){
  console.log("Server started on PORT: " + config.port);
});

module.exports = app;