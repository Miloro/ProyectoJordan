let express = require('express');
let app = express();
let cristalController = require('../controllers/cristal.controller');
let mdAutorizacion = require('../middlewares/autorizacion');

// Metodos HTTP. Recomiendo que lean de algun lado las buenas practicas.
// A grandes rasgos: 
// GET: se utiliza para consulta de datos (ejemplo: consulta de stock. Los parametros de busqueda se pasan por)
// POST: Para dar de alta nuevas registros.
// PUT: Se utiliza para reemplazar un registro existente por otra.
// PATCH: Se utiliza para modificar solo una parte de una entidad que ya existe (ejemplo: subirle el stock).

app.get('/stock', cristalController.stockDeCristal);
app.get('/stockConPrecioCompra',mdAutorizacion.soloAdmin , cristalController.stockConPrecioCompra)
app.get('/stockConPrecioVenta', cristalController.stockConPrecioVenta)
app.patch('/stock', cristalController.disminuirStock )
app.post('/', mdAutorizacion.soloAdmin ,cristalController.altaModeloCristal);



module.exports = app;