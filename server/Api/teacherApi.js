var teacher = require('../DB/teacher');

exports.getAllTeachers = function() {

    teacher.findAll().then(function(result){

        console.log("所有文章："+JSON.stringify(result));
    })

};


exports.createATeacher = function(user) {

    var now = Date.now();
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

//exports.getAllTeachers();
//exports.login({stuId:"201692077",password:"131"});

// exports.createATeacher({teaId:"201692089",
//     name:"dddd",
//     gender:"男",
//     phoneNum:"13847771111",
//
//     password:"123465"});