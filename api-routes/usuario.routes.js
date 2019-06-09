let express = require('express');
let app = express();
let estucheController = require('../controllers/usuario.controller');

app.post('/', estucheController.altaUsuario);

module.exports = app;