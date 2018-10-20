/**
 * Created by liyunhao on 2018/10/13.
 */
var Sequelize = require("sequelize");
var mysql = require("./manager");
var sequelize = mysql.sequelize;
var DreamArtsSignUp = sequelize.define('kind', {

        kind:{ //学生的学号,主键
            type:Sequelize.STRING(6),
            primaryKey: true
        },
        name:{ //消息的Id
            type:Sequelize.STRING(10),
            primaryKey: true
        }

    },
    {
        freezeTableName: true
    }
);

module.exports =DreamArtsSignUp;