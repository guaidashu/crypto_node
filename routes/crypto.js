let CryptoController = require("../controller/crypto");

var express = require('express');
var router = express.Router();

/**
 * Crypto 解密 路由 配置处
 */
router.get('/', function (req, res, next) {
    CryptoController.index(req, res);
});

module.exports = router;
