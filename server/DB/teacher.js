/**
 * Created by liyunhao on 2018/10/13.
 */
var Sequelize = require("sequelize");
var mysql = require("./manager");
var sequelize = mysql.sequelize;
var DreamArtsSignUp = sequelize.define('Teacher', {

        teaId:{ //学生的学号,主键
            type:Sequelize.STRING(12),
            primaryKey: true
        },
        name:{
            type:Sequelize.STRING(20)
        },
        gender:{
            type:Sequelize.STRING(2)
        },
        phoneNum:{
            type:Sequelize.STRING(11)
        },
        password:{
            type:Sequelize.STRING(20)
        }

    },
    {
        freezeTableName: true
    }
);

module.exports =DreamArtsSignUp;