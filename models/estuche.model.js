var mongoose = require('mongoose');
let Schema = mongoose.Schema;
let uniqueValidator= require('mongoose-unique-validator');


// Setup schema
var estucheSchema = Schema({
    
    marca: { 
        type : String, 
        required: true 
    },
    material: { 
        type : String, 
        required: true 
    },
    color: { 
        type : String, 
        required: true 
    },
    codigo: { 
        type : String,
        required: true,
        unique: true
    },
    precioVenta: {
        type: Number,
        required: true
    },
    precioCompra: {
        type: Number,
        required: true
    },
    stock: {
        type : Number, 
        default: 0
    }
    
});

estucheSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico'});

// Export MedicalCard model
module.exports = mongoose.model('Estuche', estucheSchema);