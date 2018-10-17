var express = require('express');
var router = express.Router();
var studentApi = require("../Api/studentApi")
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/app', function(req, res, next) {
    console.log("app");
    var callbackFun = req.query.callbackFun;
    var data = {'name': 'jifeng', 'company': 'taobao'};
    var ret = callbackFun + "("+ JSON.stringify(data)+ ")";
    res.end(ret);
});

router.get('/studentLogin', function(req, res, next) {
    console.log("studentLogin");

    studentApi.login( req , function (data) {
        var callbackFun = req.query.callbackFun;
        console.log("callbackFun : " + callbackFun);
        var ret = callbackFun + "("+ JSON.stringify(data)+ ")";
        res.end(ret);

    });

});

// router.get('/login', function(req, res, next) {
//     console.log("/login");
//     studentApi.login( ,function () {
//         res.end(ret);
//     })
//
// });


router.get('/jsonp', function(req, res, next) {
    console.log("shoudao3");
    var data = { some: 'json' };
    data = JSON.stringify(data);
    res.json({a:1,b:2});
});
module.exports = router;
