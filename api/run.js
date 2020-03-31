/**
 * Archivo de config del servidor
 */

const express = require('express');
const app = express();


app.set('port', process.env.PORT || 3000); // config del puerto


app.use(express.json()); // para manejar json's


// Importar rutas de la api
app.use(require('./src/routes/state'));

// inicializando el servidor
const server = app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ', app.get('port'));
});

module.exports = server;