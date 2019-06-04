var mongoose = require('mongoose');
let Schema = mongoose.Schema;

var Material = {
    values: ["CRISTAL", "VIDRIO"],
    message : '{VALUE} no es un material permitido'
};

var Tipo = {
    values: ["BI_FOCAL", "MULTIFOCAL"],
    message : '{VALUE} no es un tipo permitido'
}

// Setup schema
var cristalSchema = Schema({
    
    marca: { 
        type : String, 
        required: true 
    },
    stock: {
        type : Number, 
        default: 0
    },
    material: {
        type: String,
        require: true,
        enum: Material
    },
    tipo: {
        type: String,
        require: true,
        enum: Tipo
    },
    precioCompra: {
        type : Number,
        default: 0
    },
    precioVenta: {
        type : Number,
        default : 0
    }
    
});

// Export MedicalCard model
module.exports = mongoose.model('Cristal', cristalSchema);