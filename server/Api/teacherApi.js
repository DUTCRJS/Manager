var teacher = require('../DB/teacher');
var info = require('../DB/info');
var moment = require('moment');
var manager = require('../DB/manager');


exports.getAllTeachers = function() {

    teacher.findAll().then(function(result){

        console.log("所有文章："+JSON.stringify(result));
    })

};


exports.createATeacher = function(user) {

    //var now = Date.now();
    teacher.create({
        teaId:user.teaId,
        name:user.name,
        gender:user.gender,
        phoneNum:user.phoneNum,
        password:user.password
    }).then(function (p) {
        console.log('created.' + JSON.stringify(p));
    }).catch(function (err) {
        console.log('failed: ' + err);
    });

};



exports.login = function(req,callback) {
    // var user = {teaId:"201692077",password:"131"};
    var user = req.query;
    teacher.findAll({
        where:{
            teaId:user.teaId
        }
    }).then( function (oneUser) {
        console.log("oneUser.length ： " + oneUser.length);

        if (oneUser.length === 0) {
            console.log("没有注册");
            callback({state:0,msg:"您尚未注册注册！"});
        }else{

            console.log("注册了！");
            console.log("oneUser: " + JSON.stringify(oneUser[0]) );
            console.log("oneUser.password :" + oneUser.password);
            if(oneUser[0].password === user.password){
                console.log("登录成功！");
                callback({state:1,msg:"登录成功！"});
            }else{
                console.log("密码错误！");
                callback({state:2,msg:"密码错误！"});
            }

        }

    })
};

exports.createAInfo = function(req,callback) {

    var teaId = req.query.teaId;
    // var infoId = "3" ;
    var oneInfo = req.query;
    var sql1 = 'select infoId from info order by infoId DESC limit 1';
    manager.sequelize.query(sql1).then(function (value) {
        value = value[0][0];
        var infoId = value.infoId + 1;

        var sql =
            ' insert into info ' +
            ' values ("'+ infoId +'","'+oneInfo.title+'","'+
            oneInfo.pubTime +'","'+oneInfo.startTime+'","'+oneInfo.endTime +'","'+oneInfo.content+'"); ' +
            ' insert into teaInfo values ("'+teaId+'",' + ', "'+infoId+'");';

        manager.sequelize.query(sql).then(function(kinds) {
            kinds = kinds[0][0];
            console.log("老师自定义通知插入成功！ " + JSON.stringify(kinds));
            callback({state:1,msg:"老师自定义通知插入成功！"});
        })
    });


};
//exports.getAllTeachers();
//exports.login({stuId:"201692077",password:"131"});

// exports.createATeacher({teaId:"201692089",
//     name:"dddd",
//     gender:"男",
//     phoneNum:"13847771111",
//
//     password:"123465"});

// exports.createAInfo({title:"辅导员的通知",
//     pubTime:moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
//     startTime:moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
//     endTime:moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
//
//     content:"123465"});