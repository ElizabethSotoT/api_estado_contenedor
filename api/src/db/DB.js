/**
 * Archivo de conexion a la BD
 */

const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'monitoreo'
});


mysqlConnection.connect(function(err){
    if(err){
        console.log('Error al conectar BD: ', err);
        return;
    }else{
        console.log('Conectado a la BD');
    }
});

module.exports = mysqlConnection;