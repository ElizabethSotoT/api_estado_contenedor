// ruta para obtener el estado del contenedor

const express = require('express');
const router = express.Router();


const mysqlConnection = require('../DB');

// crear la ruta principal/inicial
router.get('/', (req, res) => {
    mysqlConnection.query('CALL get_last()', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('ERROR al realizar consulta de la ruta / - ', err);
            return;
        }
    });
});

module.exports = router;