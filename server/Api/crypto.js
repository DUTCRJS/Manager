var crypto = require('crypto');
// var content = 'password';
var md5 = crypto.createHash('md5');

exports.decode = function (content) {
    md5.update(content);
    var sign = md5.digest('hex');
    console.log(sign);
    return sign;
};

exports.verify = function (sign,content) {
    var verifysign = crypto.createHash('md5').update(content, 'utf8').digest("hex");
    //得到verifysign
    if (verifysign === sign) {
        console.log("验证成功！");
        return true;
    }
    if (verifysign !== sign) {
        console.log("验证失败！");
        return false;
    }
};