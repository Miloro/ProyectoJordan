let express = require('express');
let app = express();

// Set default API response
app.get('/', function (req, res, next) {
    res.status(200).json({
        ok: true,
        message: 'Bienvenidos a Jordan',
    });
});

module.exports = app;