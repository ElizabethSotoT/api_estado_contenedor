
const express = require('express');
const app = express();



app.set('port', process.env.PORT || 3000); // config del puerto


app.use(express.json()); // para manejar json's


// rutas de la api
app.use(require('./api/src/routes/state')); // retornara el ultimo registro de la BD


// inicializando el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ', app.get('port'));
});