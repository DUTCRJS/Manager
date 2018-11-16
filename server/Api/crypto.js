var crypto = require('crypto');
// var content = 'password';


exports.decode = function (content) {
    var md5 = crypto.createHash('md5');
    md5.update(content);
    var sign = md5.digest('hex');
    console.log(sign);
    return sign;
};

exports.verify = function (sign,content) {
    var md5 = crypto.createHash('md5');
    var verifysign = crypto.createHash('md5').update(content, 'utf8').digest("hex");
    //得到verifysign
    if (verifysign === sign) {
        console.log("md5验证成功！");
        return true;
    }
    if (verifysign !== sign) {
        console.log("md5验证失败！");
        return false;
    }
};