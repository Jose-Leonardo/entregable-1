const {Sequelize} = require('sequelize')
const config = require('../config')

//* Create a connection to database
const db = new Sequelize({
    dialect: 'postgres',//que tipo de bases de datos vamos a manejar 
    host: config.db.host, //variable de entorno del host
    username: config.db.username,
    password: config.db.password,
    database: config.db.name//nombre de la base de datos
})

module.exports = db

