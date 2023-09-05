const Sequelize = require('sequelize')

const sequelize = new Sequelize("workshop", "root", "root", {
    dialect: "mysql",
    host: "localhost"
})


module.exports = sequelize;