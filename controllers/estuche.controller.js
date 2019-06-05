let estucheRepository = require('../repositories/estuche.repository') 


exports.altaModeloEstuche = (req, res) => {
    let precioVenta= req.body.precioVenta*100 ;
    let precioCompra= req.body.precioCompra*100 ;

    estucheRepository.altaModeloEstuche(req.body.marca, req.body.material, req.body.color, req.body.codigo, precioCompra, precioVenta, req.body.stock)
                        .then(estucheRegistrado => {
                                            res.status(200).json({
                                                ok : true,
                                                message: 'El estuche fue agregado exitosamente!',
                                                data: estucheRegistrado
                                            });
                        }).catch(error =>{
                                        res.status(500).json({
                                            ok: false,
                                            message: 'Ocurrio un error agregando el estuche',
                                            error
                                        })
                        });
}

exports.stockDeEstuche = (req, res) =>{
    estucheRepository.stockDeEstuche(req.query.marca, req.query.material, req.query.color, req.query.codigo)
                        .then( stock =>{
                                res.status(200).json({
                                    ok:true,
                                    stock 
                                });
                            }
                        )
                        .catch( err => {
                            res.status(204).json({
                                ok:false,
                                message: "No existe un estuche de esas caracteristicas"
                            })
                        });
} 

exports.stockDeEstucheConPrecioCompra = (req, res) =>{
    estucheRepository.stockDeEstuche(req.query.marca, req.query.material, req.query.color, req.query.codigo)
                        .then( stock =>{
                                res.status(200).json({
                                    ok:true,
                                    stock 
                                });
                            }
                        )
                        .catch( err => {
                            res.status(204).json({
                                ok:false,
                                message: "No existe un estuche con esas caracteristicas"
                            })
                        });
} 

exports.quitarDelStock = (req, res) =>{
    estucheRepository.quitarDelStock(req.body.cantidadADescontar, req.body.codigo)
                    .then(estucheActualizado => {
                        if(!estucheActualizado){
                            res.status(500).json({
                                ok:false,
                                message:"No existe stock suficiente de ese modelo o no existe el modelo"
                            })
                        }
                        res.status(200).json({
                            ok:true,
                            estucheActualizado
                            });
                        }
                    )
                    .catch(err => {
                        res.status(500).json({
                            ok:false,
                            err
                        })
                    })
}