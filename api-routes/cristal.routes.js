let express = require('express');
let app = express();
let cristalController = require('../controllers/cristal.controller');

// Metodos HTTP. Recomiendo que lean de algun lado las buenas practicas.
// A grandes rasgos: 
// GET: se utiliza para consulta de datos (ejemplo: consulta de stock. Los parametros de busqueda se pasan por)
// POST: Para dar de alta nuevas registros.
// PUT: Se utiliza para reemplazar un registro existente por otra.
// PATCH: Se utiliza para modificar solo una parte de una entidad que ya existe (ejemplo: subirle el stock).

app.post('/', cristalController.altaModeloCristal);
app.get('/stock', cristalController.stockDeCristal);


module.exports = app;