var mongoose = require('mongoose');
let Schema = mongoose.Schema;


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
        required: true 
    },
    stock: {
        type : Number, 
        default: 0
    }
    
});

// Export MedicalCard model
module.exports = mongoose.model('Estuche', estucheSchema);