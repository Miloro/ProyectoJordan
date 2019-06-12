var mongoose = require('mongoose');
let Schema = mongoose.Schema;
let uniqueValidator= require('mongoose-unique-validator');

var rol = {
    values: ["USER_ROLE", "ADMIN_ROLE"],
    message : '{VALUE} no es un tipo permitido'
}


// Setup schema
var userSchema = Schema({
    email: { 
        type : String, 
        required: true,
        unique: true 
    },
    rol: { 
        type : String, 
        default: "USER_ROLE" 
    }
})

userSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico'});


// Export MedicalCard model
module.exports = mongoose.model('User', userSchema);
