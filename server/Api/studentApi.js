var student = require('../DB/student');

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

//exports.getAllStudents();
//exports.login({stuId:"2016920771",password:"131"});

// exports.createAStudent({stuId:"201692089",
//     name:"dddd",
//     gender:"男",
//     phoneNum:"13847771111",
//     field:"ruanjian",
//     class:"软1602",
//     password:"123465"});