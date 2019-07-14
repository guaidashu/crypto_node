let CryptoController = require("../controller/crypto");

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    CryptoController.index(req, res);
});

module.exports = router;
