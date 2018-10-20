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



exports.login = function(user) {

    teacher.findAll({
        where:{
            teaId:user.stuId
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

exports.createAInfo = function(oneInfo) {

    //var now = Date.now();
    var sql1 = 'select infoId from info order by infoId DESC limit 1';
    manager.sequelize.query(sql1).then(function (value) {
        value = value[0][0];
        infoId = value.infoId;
        newinfoId = infoId + 1;
        //console.log(JSON.stringify(infoId));

        info.create({
            infoId:newinfoId,
            title:oneInfo.title,
            pubTime:oneInfo.pubTime,
            startTime:oneInfo.startTime,
            endTime:oneInfo.endTime,
            content:oneInfo.content
        }).then(function (p) {
            var kind = '9';
            var sql = 'INSERT INTO infokind VALUE("'+ newinfoId +'","'+kind+'");';
            manager.sequelize.query(sql).then(function(kinds){
                console.log(JSON.stringify(kind));
            })



        }).catch(function (err) {
            console.log('failed: ' + err);
        });



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

exports.createAInfo({title:"辅导员的通知",
    pubTime:moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    startTime:moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    endTime:moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),

    content:"123465"});