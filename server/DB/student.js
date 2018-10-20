/**
 * Created by liyunhao on 2018/10/13.
 */
var Sequelize = require("sequelize");
var mysql = require("./manager");
var sequelize = mysql.sequelize;
var DreamArtsSignUp = sequelize.define('Student', {

        stuId:{ //学生的学号,主键
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
        field:{
            type:Sequelize.STRING(15)
        },
        class:{
            type:Sequelize.STRING(7)
        },
        password:{
            type:Sequelize.STRING(20)
        },
        campus:{
            type:Sequelize.STRING(20)
        }
    },
    {
        freezeTableName: true
    }
);

module.exports =DreamArtsSignUp;