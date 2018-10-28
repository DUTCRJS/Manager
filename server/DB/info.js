/**
 * Created by liyunhao on 2018/10/13.
 */
var Sequelize = require("sequelize");
var mysql = require("./manager");
var sequelize = mysql.sequelize;
var DreamArtsSignUp = sequelize.define('Info', {

        infoId:{ //学生的学号,主键
            type:Sequelize.INTEGER(6),
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type:Sequelize.STRING(60)
        },
        date:{
            type:Sequelize.DATE()
        },
        pubTime:{
            type:Sequelize.DATE()
        },
        startTime:{
            type:Sequelize.DATE()
        },
        endTime:{
            type:Sequelize.DATE()
        },
        content:{
            type:Sequelize.STRING(2000)
        },
        htmlContent:{
            type:Sequelize.STRING(2000)
        },
        kind:{
            type:Sequelize.STRING(20)
        }
    },
    {
        freezeTableName: true
    }
);

module.exports =DreamArtsSignUp;