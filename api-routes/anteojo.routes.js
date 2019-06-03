let express = require('express');
let app = express();
let anteojoController = require('../controllers/anteojo.controller');

app.get('/stock', anteojoController.stockDeAnteojo);
app.post('/', anteojoController.altaModeloAnteojo);

module.exports = app;
