const Sequelize = require("Sequelize")
const db = new Sequelize("postgres://localhost:5432/crypto_app", {
    logging: false
})

module.exports = db;