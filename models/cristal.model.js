var mongoose = require('mongoose');
let Schema = mongoose.Schema;


// Setup schema
var cristalSchema = Schema({
    
    marca: { 
        type : String, 
        required: true 
    },
    stock: {
        type : Number, 
        default: 0
    }
    
});

// Export MedicalCard model
module.exports = mongoose.model('Cristal', cristalSchema);