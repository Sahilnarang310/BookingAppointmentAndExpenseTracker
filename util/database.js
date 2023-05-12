const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodecomplete', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;