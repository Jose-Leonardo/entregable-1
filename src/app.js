const express = require('express')
const app = express()
app.use(express.json())

const {port} = require('./config')

//*-----------Autenticacion y verificacion con respecto a la base de datos

const db = require('./utils/database')
const initModels = require('./models/initModels')

const usersRouters = require('./users/users.router')
//*
//*Rutas
app.use('/api/v1/users', usersRouters)
//?----------{

db.authenticate()
    .then(() => {console.log('Base de datos autenticada')})
    .catch(err => {console.log(err)})

db.sync()
    .then(() => {console.log('Base de datos sincronizada')})
    .catch(err => {console.log(err)})

initModels()//*aqui manejamos todas las relaciones, por si tienes mas tablas

//?---------}


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'OK',
        users: `localhost ${port}/api/v1/users`
    })
}) 

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
