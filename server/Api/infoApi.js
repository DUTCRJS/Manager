var info = require('../DB/info');

var moment = require('moment');

exports.getAllInfos = function() {

    info.findAll().then(function(result){

        console.log("所有文章："+JSON.stringify(result));
    })

};

exports.createAInfo = function(oneInfo) {

    var now = Date.now();
    info.create({

        title:oneInfo.title,
        kind:oneInfo.kind,
        date:oneInfo.date,
        start:oneInfo.start,
        end:oneInfo.end,
        content:oneInfo.content
    }).then(function (p) {
        console.log('created.' + JSON.stringify(p));
    }).catch(function (err) {
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


exports.createAInfo({
    title:"dddd",
    kind:"91",
    pubTime:new Date(),
    startTime:moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    endTime:moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    content:"内容"});