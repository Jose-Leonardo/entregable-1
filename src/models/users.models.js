//! Creacio de modelo, se define y agrega sus caracteristicas 
//* Importamos DataTypes de sequelize,esto nos ayudara a
//* generar el tipo de dato que se guardara en nuestra base de datos
const {DataTypes} = require('sequelize')

//*Aqui importamos la utilidad que creamos anteriormente
const db = require('../utils/database')

/*//*debe empesar con mayusculas y en plural
//*Creamos un modelo "Users", accediendo a db.define()*/
const Users = db.define( //recibe 2 argumentos, nom de la tabla "users" y obj de las columnas
    'Users', { 
    id:{
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {//*validacion con sequelize
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday:{
        type: DataTypes.DATEONLY,
        allowNull: false
    }
})   
     
module.exports = Users



