// Archivo de config de ruta para obtener el ultimo registro/estado de la BD

const express = require('express');
const router = express.Router();

const mysqlConnection = require('../../db/DB'); // importa el archivo de conexion a la BD

// crear la ruta principal/inicial de la app
router.get('/', (req, res) => {
    mysqlConnection.query('CALL get_last()', (err, rows, fields) => { // ejecuta el procedimiento almacenado
        if(!err){
            res.json(rows[0]); // devuelve la primera fila
        }else{ // en caso de error
            console.log('ERROR al realizar consulta de la ruta / - ', err);
            return;
        }
    });
});

module.exports = router; 