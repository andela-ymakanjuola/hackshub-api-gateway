var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    parseUrlencoded = bodyParser.urlencoded({extended: true}),
    Gateway = require('../controllers/gateway.controller');


//Gateway routes to users service
router.route('/signup')

  .post(parseUrlencoded, Gateway.create);

router.route('/login')

  .post(Gateway.login)


//Gateway routes to notifications api
router.route('api/vi/:username/notifications')

  .get(Gateway.readAll);

router.route('/api/v1/:username/notifications/:notifications')

  .get(Gateway.read)

  .put(parseUrlencoded, Gateway.update)

  .delete(Gateway.delete);

module.exports = router;