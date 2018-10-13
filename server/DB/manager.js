var Sequelize = require('sequelize');
var sequelize = new Sequelize(
    'Manager',
    'root',
    'liyunhao',
    {
        host: '127.0.0.1',
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