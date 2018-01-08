const db = require('./db');
const Sequelize = require('sequelize')

const User = db.define('user', {
    name: {
        type: Sequelize.STRING
    }
})

module.exports = User;
