var config = require('./config/config'),
    app = require('./config/express')();


app.listen(config.port, function (){
  console.log("Server started on PORT: " + config.port);
});

module.exports = app;