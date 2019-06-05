var mongoose = require('mongoose');
let Schema = mongoose.Schema;


var anteojoSchema = Schema({

    marca: {
        type : String,
        required: true
    },
    tipo:{
        type : String,
        required: true,
    },
    material: {
        type : String,
        required: true
    },

    codigo: {
        type : String,
        required: true
    },

    precioCompra: {
        type : Number,
        required : true,
    },

    precioVenta: {
        type : Number,
        required: true,
    },

    stock: {
        type : Number,
        default: 0
    },

});

module.exports = mongoose.model('Antejo', anteojoSchema);