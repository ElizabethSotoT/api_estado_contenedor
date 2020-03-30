
const express = require('express');
const app = express();


// config del servidor
app.set('port', process.env.PORT || 3000); // puerto


// middlewares
app.use(express.json()); // para manejar json's


// rutas
app.use(require('./routes/state'));


// inicializando el servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ', app.get('port'));
});