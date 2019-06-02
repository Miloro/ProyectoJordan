// Le indico a la app donde buscar las dependencias y les doy un nombre.
const express = require('express');
const app = express();

//Se agregan parsers para API.
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var PORT = 3000;

// Fijense de tener MongoDB escuchando por 27017 (es el puerto por defecto de Mongo)
// Les va a crear una base local que se llama proyecto-jordan.
// Luego de que carguen el primer registro en la base datos deberian refrescar el ROBO3T y ahi deberian ver la base.
var MONGURI = "mongodb://localhost:27017/proyecto-jordan";


app.use(bodyParser.urlencoded({
    extended: false
}));


//Esto permite luego poder hacer req.body para buscar los datos que pasemos mas adelante en POST, PUT, PATCH y DELETE.
app.use(bodyParser.json());


//Conexion con BBDD
mongoose.connection.openUri(MONGURI,
        (err,res) => {
                if ( err ) throw err;
                console.log('BBDD: \x1b[32m%s\x1b[0m', 'online');
        }
);


// Definicion de rutas.
// ./ va a buscar a la raiz del proyecto.
// ../ sube un nivel en el arbol de directorio.
let appRoutes = require('./api-routes/app');
let estucheRoutes = require('./api-routes/estuches.routes');
let cristalRoutes = require('./api-routes/cristal.routes');



// IMPORTANTE!!! WARNING!!!! Cuidado al ingresar rutas aca, esto es lazy. 
// Eso significa: Entra por la primer ruta que matchee 
// Si ponemos primero la raiz (/) va a entrar todo por ahi y el resto de las rutas QUEDAN INACCESIBLES.
app.use('/api/estuche', estucheRoutes);
app.use('/api/cristal', cristalRoutes)
app.use('/api', appRoutes);



// Designacion de puerto por donde escucha la app.
module.exports = app.listen(PORT, ()=> {
    console.log(`Express Server puerto ${PORT}: \x1b[32m%s\x1b[0m`, 'online');
});