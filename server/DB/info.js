/**
 * Created by liyunhao on 2018/10/13.
 */
var Sequelize = require("sequelize");
var mysql = require("./manager");
var sequelize = mysql.sequelize;
var DreamArtsSignUp = sequelize.define('Info', {

        infoId:{ //学生的学号,主键
            type:Sequelize.INTEGER(6),
            primaryKey: true
        },
        title:{
            type:Sequelize.STRING(40)
        },
        kind:{
            type:Sequelize.STRING(6)
        },
        date:{
            type:Sequelize.DATE()
        },
        start:{
            type:Sequelize.DATE()
        },
        end:{
            type:Sequelize.DATE()
        },
        content:{
            type:Sequelize.STRING(2000)
        }
    },
    {
        freezeTableName: true
    }
);

module.exports =DreamArtsSignUp;