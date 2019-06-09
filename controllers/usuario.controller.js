let usuarioRepository = require('../repositories/usuario.repository') 


exports.altaUsuario = (req, res) => {

    usuarioRepository.altaUsuario(req.body.email, req.body.rol)
                        .then(usuarioRegistrado => {
                                            res.status(200).json({
                                                ok : true,
                                                message: 'El usuario fue agregado exitosamente!',
                                                usuarioRegistrado
                                            });
                        }).catch(error =>{
                                        res.status(400).json({
                                            ok: false,
                                            message: 'Ocurrio un error agregando el usuario',
                                            error
                                        })
                        });
};