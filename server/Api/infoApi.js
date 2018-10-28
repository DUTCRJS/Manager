var info = require('../DB/info');
var infoKind = require('../DB/infoKind');
var infoUrl = require('../DB/infourl');
var manager = require('../DB/manager');
var moment = require('moment');

exports.getAllInfos = function() {

    info.findAll().then(function(result){

        console.log("所有文章："+JSON.stringify(result));
    })

};

exports.createAInfo = function(oneInfo) {

    //var now = Date.now();
    info.create({

        title:oneInfo.title,
        pubTime:oneInfo.date,
        start:oneInfo.start,
        end:oneInfo.end,
        content:oneInfo.content,
        htmlContent:oneInfo.htmlContent,
        kind:oneInfo.kind
    }).then(function (p) {
        // console.log(p.kind);
        //创造info的kind
        var temp = JSON.parse(p.kind);
        var size = temp.length;
        for(var i =0; i < size; i++){
            infoKind.create({
                infoId:p.infoId,
                kind:temp[i]
            }).catch(function (err) {
                console.log('failed: ' + err);
            });
        }

    }).catch(function (err) {
        console.log('failed: ' + err);
    });

};

exports.createAUrl = function(url){
    // var size = urlS.length;
    // console.log(size);
    // for(var i = 0; i < size; i ++){
    //     infoUrl.create({
    //         url:urlS[i]
    //     }).then(function(){
    //         console.log("success");
    //     }).catch(function (err) {
    //         console.log('failed: ' + err);
    //     });
    // }
    infoUrl.create({
        url:url
    }).then(function(){
        console.log("success");
    }).catch(function (err) {
        console.log("bbb");
        console.log('failed: ' + err);
    });
};

exports.login = function(user) {

    info.findAll({
        where:{
            stuId:user.stuId
        }
    }).then( function (oneUser) {
        console.log("oneUser.length ： " + oneUser.length);

        if (oneUser.length === 0) {
            console.log("没有注册");
        }else{

            console.log("注册了！");
            console.log("oneUser: " + JSON.stringify(oneUser[0]) );
            console.log("oneUser.password :" + oneUser.password);
            if(oneUser[0].password === user.password){
                console.log("登录成功！");
            }else{
                console.log("密码错误！");
            }

        }

    })
};



//exports.getAllStudents();
//exports.login({stuId:"201692077",password:"131"});

//测试数据
// exports.createAInfo({
//     title:"dddd",
//     pubTime:new Date(),
//     startTime:moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
//     endTime:moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
//     content:"内容"});

// exports.getAllInfos();
// var sql1 =
//     'select  infoId,title,pubTime,startTime,endTime,kind ' +
//     'from info';
// manager.sequelize.query(sql1).then(function (value) {
//     value[0].forEach(function (item) {
//         console.log(JSON.stringify(item)+',' );
//     });
//
// });