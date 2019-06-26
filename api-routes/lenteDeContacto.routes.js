let express = require('express');
let app = express();
let lenteDeContactoController = require('../controllers/lenteDeContacto.controller');
let mdAutorizacion = require('../middlewares/autorizacion');


app.get('/stock', lenteDeContactoController.stockDeLente);
app.get('/stockConPrecioCompra' , mdAutorizacion.soloAdmin, lenteDeContactoController.stockDeLenteConPrecioCompra);
app.patch('/stock', lenteDeContactoController.aumentarStock );
app.patch('/stock', lenteDeContactoController.disminuirStock);
app.post('/', mdAutorizacion.soloAdmin, lenteDeContactoController.altaModelo);

module.exports = app;
