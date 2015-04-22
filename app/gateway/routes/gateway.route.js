var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    parseUrlencoded = bodyParser.urlencoded({extended: true}),
    Gateway = require('../controllers/gateway.controller');


//Gateway routes to users service
router.route('/signup')

  .post(parseUrlencoded, Gateway.createUser);

router.route('/login')

  .post(Gateway.login);


//Gateway routes to notifications api
router.route('api/vi/:username/notifications')

  .post(parseUrlencoded, Gateway.createNotification)

  .get(Gateway.readAllNotifications);

router.route('/api/v1/:username/notifications/:notifications')

  .get(Gateway.readNotification)

  .put(parseUrlencoded, Gateway.updateNotification)

  .delete(Gateway.deleteNotification);

module.exports = router;