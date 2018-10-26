var Sequelize = require("sequelize");
var mysql = require("./manager");
var sequelize = mysql.sequelize;
var DreamArtsSignUp = sequelize.define('Infourl', {

        url:{
            type:Sequelize.STRING(200),
            primaryKey: true,
            // autoIncrement: true
        }
    },
    {
        freezeTableName: true
    }
);

module.exports =DreamArtsSignUp;