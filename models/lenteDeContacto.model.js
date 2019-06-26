var mongoose = require('mongoose');
let Schema = mongoose.Schema;
let uniqueValidator= require('mongoose-unique-validator');

// Setup schema
var lenteDeContactoSchema = Schema({
    codigo:{
        type: String,
        required: true,
        unique: true 
    },
    marca: { 
        type : String, 
        required: true 
    },
    graduacion: {
        type : Number, 
        default: 0
    },
    color: {
        type: String,
        require: true,
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

lenteDeContactoSchema.plugin(uniqueValidator, { message: 'el {PATH} ya existe'});

// Export MedicalCard model
module.exports = mongoose.model('LenteDeContacto', lenteDeContactoSchema);