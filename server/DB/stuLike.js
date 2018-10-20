/**
 * Created by liyunhao on 2018/10/13.
 */
var Sequelize = require("sequelize");
var mysql = require("./manager");
var sequelize = mysql.sequelize;
var DreamArtsSignUp = sequelize.define('stuLike', {

        stuId:{ //学生的学号,主键
            type:Sequelize.STRING(12),
            primaryKey: true
        },
        kind:{ //消息的Id
            type:Sequelize.STRING(6),
            primaryKey: true
        }

    },
    {
        freezeTableName: true
    }
);

module.exports =DreamArtsSignUp;