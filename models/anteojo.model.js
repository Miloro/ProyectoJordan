var mongoose = require('mongoose');
let Schema = mongoose.Schema;
let uniqueValidator= require('mongoose-unique-validator');


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
        required: true,
        unique: true 
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

anteojoSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico'});


module.exports = mongoose.model('Anteojo', anteojoSchema);