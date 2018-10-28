var Sequelize = require('sequelize');
var sequelize = new Sequelize(
    'manager',
    'root',
    'liyunhao',
    {
        host: 'localhost',
        port: '3306',
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: false,
            paranoid: true
        }
    }
);
exports.sequelize =  sequelize;