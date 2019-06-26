let express = require('express');
let app = express();
let anteojoController = require('../controllers/anteojo.controller');
let mdAutorizacion = require('../middlewares/autorizacion');


app.get('/stock', anteojoController.stockDeAnteojo);
app.get('/stockConPrecioCompra' , mdAutorizacion.soloAdmin, anteojoController.stockDeAnteojoConPrecioCompra);
app.patch('/aumentarStock', anteojoController.aumentarStock );
app.patch('/stock', anteojoController.disminuirStock);
app.post('/', mdAutorizacion.soloAdmin, anteojoController.altaModeloAnteojo);

module.exports = app;
