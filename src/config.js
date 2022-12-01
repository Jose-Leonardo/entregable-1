//!Gestiona las variables de entorno
//*nos habilita entrar a las variables de entorno ".env" "npm i dotenv"
require('dotenv').config()  //dependencia

const config = {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV || 'development',//entorno en donde se encuentra tu aplicacion = desarrollo, testing, produccion 
    db: {
        port:process.env.DB_PORT || 5432,
        username:process.env.DB_USER  || 'postgres',
        password:process.env.DB_PASS || 'augl020225',
        host:process.env.DB_HOST || 'localhost',
        name:process.env.DB_NAME || 'Users'
    }
}
 
module.exports = config