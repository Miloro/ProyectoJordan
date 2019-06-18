const usuarioRepository = require('../repositories/usuario.repository');

exports.soloAdmin= async (req, res, next) => {
    const usuario = await usuarioRepository.buscarPorEmail( req.query.email )
    if(usuario && 'ADMIN_ROLE' == usuario.rol)
        next();
    else{

    res.status(401).json({
        ok: false,
        mensaje: "Solo pueden acceder los ADMIN a esta funcion"
    })}
}
