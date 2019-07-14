let back = require("../utils/back");
let cryptoFactory = require("../other/crypto");
var CryptoJS = require("crypto-js");
let kpa20190624 = require("../other/cryptoKey");

/**
 * 解密控制器
 * @type {{index(*, *=): void}}
 */
let CryptoController = {
    index(req, res) {
        kpa20190624(629747,"第5话",16854,"墙外少女");
        back.success(res, "ok");
    }
};

module.exports = CryptoController;
