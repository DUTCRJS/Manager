var student = require('../DB/student');
var manager = require("../DB/manager");
var moment = require('moment');

exports.getAllStudents = function() {

    student.findAll().then(function(result){

        console.log("所有文章："+JSON.stringify(result));
    })

};


exports.createAStudent = function(stu) {

    var now = Date.now();
    student.create({
        stuId:stu.stuId,
        name:stu.name,
        gender:stu.gender,
        phoneNum:stu.phoneNum,
        field:stu.field,
        class:stu.class,
        password:stu.password
    }).then(function (p) {
        console.log('created.' + JSON.stringify(p));
    }).catch(function (err) {
        console.log('failed: ' + err);
    });

};


exports.login = function(user) {

    student.findAll({
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

//获取一个学生的所有通知
exports.getAllInfo = function(stuId) {



    console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'));

    var sql
       =' SELECT info.title,info.content,info.pubTime,info.startTime,info.endTime,timediff(startTime,endTime) as restTime ' +
        ' FROM StuInfo NATURAL JOIN info ' +
        ' where stuId = "'+ stuId+ '"' +
        ' union all ' +
        ' SELECT info.title,info.content,info.pubTime,info.startTime,info.endTime,timediff(startTime,endTime) as restTime ' +
        ' FROM StuAdd NATURAL JOIN info ' +
        ' where stuId = "'+stuId+'"';
    manager.sequelize.query(sql).then(function(kinds){
        kinds = kinds[0];
        kinds.forEach(function (value) {
            console.log( "所有通知 :" + JSON.stringify(value));
        });

    })

};


//exports.getAllStudents();
//exports.login({stuId:"201692077",password:"131"});
exports.getAllInfo("201692077");

// exports.createAStudent({stuId:"201692089",
//     name:"dddd",
//     gender:"男",
//     phoneNum:"13847771111",
//     field:"ruanjian",
//     class:"软1602",
//     password:"123465"});