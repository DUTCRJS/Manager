var express = require('express');
var router = express.Router();
var studentApi = require("../Api/studentApi");
var teacherApi = require("../Api/teacherApi");
/* GET home page. */

//主页
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/app', function(req, res, next) {
    console.log("req query " + JSON.stringify(req.query));


    var callbackFun = req.query.callbackFun;
    var data = {'name': 'jifeng', 'company': 'taobao'};
    var ret = callbackFun + "("+ JSON.stringify(data)+ ")";
    res.end(ret);
});

//学生登录
router.get('/studentLogin', function(req, res, next) {
    console.log("studentLogin");

    studentApi.login( req , function (data) {
        var callbackFun = req.query.callbackFun;
        console.log("callbackFun : " + callbackFun);
        var ret = callbackFun + "("+ JSON.stringify(data)+ ")";
        res.end(ret);

    });

});

//老师登录
router.get('/teacherLogin', function(req, res, next) {
    console.log("teacherLogin");

    teacherApi.login( req , function (data) {
        var callbackFun = req.query.callbackFun;
        console.log("callbackFun : " + callbackFun);
        var ret = callbackFun + "("+ JSON.stringify(data)+ ")";
        res.end(ret);

    });

});


//学生注册
router.get('/studentRegister', function(req, res, next) {
    console.log("studentRegister");

    studentApi.createAStudent( req , function (data) {
        var callbackFun = req.query.callbackFun;
        console.log("callbackFun : " + callbackFun);
        var ret = callbackFun + "("+ JSON.stringify(data)+ ")";
        res.end(ret);

    });

});

//学生偏好设置
router.get('/studentPrefer', function(req, res, next) {
    console.log("studentPrefer");

    studentApi.studentPrefer( req , function (data) {
        var callbackFun = req.query.callbackFun;
        console.log("callbackFun : " + callbackFun);
        var ret = callbackFun + "("+ JSON.stringify(data)+ ")";
        res.end(ret);

    });

});

// 学生的所有信息的标题和发布时间，开始时间结束时间
router.get('/studentAllInfo', function(req, res, next) {
    console.log("studentAllInfo");

    studentApi.studentAllInfo( req , function (data) {
        var callbackFun = req.query.callbackFun;
        console.log("callbackFun : " + callbackFun);
        var ret = callbackFun + "("+ JSON.stringify(data)+ ")";
        res.end(ret);

    });

});

// 学生查看一个具体的通知
router.get('/studentOneInfo', function(req, res, next) {
    console.log("studentOneInfo");

    studentApi.studentOneInfo( req , function (data) {
        var callbackFun = req.query.callbackFun;
        console.log("callbackFun : " + callbackFun);
        var ret = callbackFun + "("+ JSON.stringify(data)+ ")";
        res.end(ret);

    });

});

// 学生查看个人信息
router.get('/studentDetail', function(req, res, next) {
    console.log("studentDetail");

    studentApi.studentDetail( req , function (data) {
        var callbackFun = req.query.callbackFun;
        console.log("callbackFun : " + callbackFun);
        var ret = callbackFun + "("+ JSON.stringify(data)+ ")";
        res.end(ret);

    });

});

// 学生加自己的安排
router.get('/studentAddOneInfo', function(req, res, next) {
    console.log("studentAddOneInfo");

    studentApi.studentAddOneInfo( req , function (data) {
        var callbackFun = req.query.callbackFun;
        console.log("callbackFun : " + callbackFun);
        var ret = callbackFun + "("+ JSON.stringify(data)+ ")";
        res.end(ret);

    });

});

// 学生搜索通知
router.get('/studentSearchInfo', function(req, res, next) {
    console.log("studentSearchInfo");

    studentApi.studentSearchInfo( req , function (data) {
        var callbackFun = req.query.callbackFun;
        console.log("callbackFun : " + callbackFun);
        var ret = callbackFun + "("+ JSON.stringify(data)+ ")";
        res.end(ret);

    });

});
// 返回各类通知小类别
router.get('/kindInfo', function(req, res, next) {
    console.log("kindInfo");

    studentApi.kindInfo( req , function (data) {
        var callbackFun = req.query.callbackFun;
        console.log("callbackFun : " + callbackFun);
        var ret = callbackFun + "("+ JSON.stringify(data)+ ")";
        res.end(ret);

    });

});
//跨域Demo
router.get('/jsonp', function(req, res, next) {
    console.log("shoudao3");
    var data = { some: 'json' };
    data = JSON.stringify(data);
    res.json({a:1,b:2});
});


module.exports = router;
