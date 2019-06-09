var mongoose = require('mongoose');
let Schema = mongoose.Schema;

var rol = {
    values: ["USER_ROLE", "ADMIN_ROLE"],
    message : '{VALUE} no es un tipo permitido'
}


// Setup schema
var userSchema = Schema({
    email: { 
        type : String, 
        required: true 
    },
    rol: { 
        type : String, 
        default: "USER_ROLE" 
    }
})


// Export MedicalCard model
module.exports = mongoose.model('User', userSchema);
