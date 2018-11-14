var student = require('../DB/student');
var manager = require("../DB/manager");
var info = require("../DB/info");
var moment = require('moment');
var crypto = require("./crypto");

exports.getAllStudents = function() {

    student.findAll().then(function(result){

        console.log("所有文章："+JSON.stringify(result));
    })

};


exports.createAStudent = function(req,callback) {

    // var now = Date.now();
    var stu = req.query;
    console.log("stu" + stu);
    student.create({
        stuId:stu.stuId,
        name:stu.name,
        gender:stu.gender,
        phoneNum:stu.phoneNum,
        field:stu.field,
        class:stu.class,
        password:crypto.decode(stu.password),
        campus:stu.campus
    }).then(function (p) {
        console.log('created.' + JSON.stringify(p));
        callback({state:1,mag:'注册成功！'});
    }).catch(function (err) {
        console.log('failed: ' + err);
        callback({state:0,mag:'注册失败，请重试！'});

    });

};


exports.login = function(req,callback) {

    // var callbackFun = req.query.callbackFun;
    // var user = {stuId:"201692077",password:"13"};
     var user = req.query;
    student.findAll({
        where:{
            stuId:user.stuId
        }
    }).then( function (oneUser) {
        console.log("oneUser.length ： " + oneUser.length);

        if (oneUser.length === 0) {
            console.log("没有注册");
            callback({state:0,msg:"您尚未注册注册！"});
        }else{

            console.log("注册了！");
            // console.log("oneUser: " + JSON.stringify(oneUser[0]) );
            // console.log("oneUser.password :" + oneUser.password);
            var isRight = crypto.verify(oneUser[0].password,user.password);
            if(isRight){
                console.log("登录成功！");
                callback({state:1 ,msg:"登录成功！"});
            }else{
                console.log("密码错误！");
                callback({state:2, msg:"密码错误！"});
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

exports.studentPrefer = function (req,callback) {
   var stuPre = req.query;
   var sql =
       ' DELETE FROM stulike ' +
       ' WHERE stuId = "'+ stuPre.stuId+'"; ' ;


   manager.sequelize.query(sql).then(function(kinds) {

       JSON.parse(stuPre.prefer).forEach(function (value) {
           sql1 = '';
           sql1 += ' INSERT INTO stulike VALUES("'+stuPre.stuId+'","'+ value +'"); ';
           console.log("stulikesql " + sql1);
           manager.sequelize.query(sql1).then(function (value) {
               console.log("ret " + JSON.stringify(value));
           })
       });
       callback({state:1,msg:'学生偏好设置成功！'})

   })

};

exports.studentAllInfo = function (req,callback) {

    var stuId = req.query.stuId;
    // var stuId = "201692077";

    var sql =
        'select distinct info.infoId,info.title,info.pubTime,info.startTime,info.endTime,info.kind\n' +
        'from stulike join infokind on stulike.kind = infokind.kind\n' +
        'join info on info.infoId = infokind.infoId\n' +
        ' where stuId = "'+ stuId +'" ' +
        'union\n' +
        'select distinct info.infoId,info.title,info.pubTime,info.startTime,info.endTime,info.kind \n' +
        'from stuadd join info on stuadd.infoId = info.infoId \n' +
        ' where stuId = "'+ stuId +'" ' +
        'union \n' +
        'select distinct info.infoId,info.title,info.pubTime,info.startTime,info.endTime,info.kind\n' +
        'from stuTea join teainfo on stuTea.teaId = teainfo.teaId \n' +
        'join info on teainfo.infoId = info.infoId \n' +
        ' where stuId = "'+ stuId +'" ';

    manager.sequelize.query(sql).then(function(kinds){
        kinds = kinds[0];

        console.log( "ret :" + JSON.stringify(kinds));

        callback(kinds);
    })
};

exports.studentOneInfo = function (req,callback) {
    var infoId = req.query.infoId;
    // var infoId = "3" ;
    var sql =
        'select * ' +
        'from info ' +
        'where infoId = "'+infoId+'"';

    manager.sequelize.query(sql).then(function(kinds) {
        kinds = kinds[0][0];
        console.log("ret " + JSON.stringify(kinds));
        callback(kinds);
    })
};

exports.studentDetail = function (req,callback) {
    var stuId = req.query.stuId;
    // var infoId = "3" ;
    var sql =
        'select kind\n' +
        'from stulike\n' +

        'where stuId = "'+stuId+'"';

    manager.sequelize.query(sql).then(function(kinds) {
        kinds = kinds[0];
        console.log("ret " + JSON.stringify(kinds));
        callback(kinds);
    })
};

exports.studentAddOneInfo = function (req,callback) {
    var stuId = req.query.stuId;
    // var infoId = "3" ;
    var oneInfo = req.query;
    console.log("插入一条学生自定义通知！");
    var sql1 = 'select infoId from info order by infoId DESC limit 1';
    manager.sequelize.query(sql1).then(function (value) {
        value = value[0][0];
        var infoId = value.infoId + 1;

        info.create({
            infoId:infoId,
            title:oneInfo.title,
            pubTime:oneInfo.pubTime,
            startTime:oneInfo.startTime,
            endTime:oneInfo.endTime,
            content:oneInfo.content,
            htmlContent:oneInfo.htmlContent,
            kind:oneInfo.kind
        }).then(function (p) {
            // console.log(p.kind);
            //创造info的kind
            var sql1 = ' insert into stuadd values ("'+stuId+'",' + '"'+infoId+'");';
            manager.sequelize.query(sql1).then(function (value2) {
                console.log("学生自定义通知插入成功！ "  + JSON.stringify(value2));
                callback({state:1,msg:"学生自定义通知插入成功！"});
            });

        }).catch(function (err) {
            console.log('failed: ' + err);
        });



    });

};

exports.studentSearchInfo = function (req,callback) {
    var title = req.query.title;
    // var infoId = "3" ;

    var sql =
        ' select *  ' +
        ' from info ' +
        ' where title like "%通知%" ' +
        ' limit 5';
    manager.sequelize.query(sql).then(function (value) {
        value = value[0];
        console.log("模糊搜索的title " + value);
        callback(value);

    });
};

exports.kindInfo = function (req,callback) {
    // console.log("11111");
    var kind = req.query.type;
    console.log("kind " + kind);
    var sql='';
    if(kind === "10" || kind === "20" || kind === "30"){
        // console.log("222");
        sql =
            'select distinct info.infoId,info.title,info.pubTime,info.startTime,info.endTime\n' +
            'from info join infokind on infokind.infoId = info.infoId \n' +
            'where infokind.kind like "' + kind.substr(0, 1) +'%"';
    }else {

     sql =
        'select distinct info.infoId,info.title,info.pubTime,info.startTime,info.endTime\n' +
        'from info join infokind on infokind.infoId = info.infoId \n' +
        'where infokind.kind = "'+ kind +'"';
    }
    console.log("sql " + sql);
    manager.sequelize.query(sql).then(function (value) {
        value = value[0];
        console.log("小类的title " + JSON.stringify(value));
        callback(value);

    });

};
// exports.studentAllInfo();
//exports.getAllStudents();
//exports.login({stuId:"201692077",password:"131"});
//exports.getAllInfo("201692077");

// exports.createAStudent({stuId:"201692078",
//     name:"dddd",
//     gender:"男",
//     phoneNum:"13847771111",
//     field:"ruanjian",
//     class:"软1602",
//     password:"123465"});