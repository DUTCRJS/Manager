/**
 * Created by liyunhao on 2018/10/13.
 */
var Sequelize = require("sequelize");
var mysql = require("./manager");
var sequelize = mysql.sequelize;
var DreamArtsSignUp = sequelize.define('stuAdd', {

        stuId:{ //学生的学号,主键
            type:Sequelize.STRING(12),
            primaryKey: true
        },
        infoId:{ //学生的学号,主键
            type:Sequelize.INTEGER(6),
            primaryKey: true
        }

    },
    {
        freezeTableName: true
    }
);

module.exports =DreamArtsSignUp;