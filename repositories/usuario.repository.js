const Usuario = require ('../models/user.model');

exports.altaUsuario= (email, rol) => {
    return new Usuario ({
        email: email,
        rol: rol
    }).save();
}

exports.verUsuarios = () => {
    return Usuario.find();
}

exports.buscarPorEmail= (email) =>{
    return Usuario.findOne({email: email});
}