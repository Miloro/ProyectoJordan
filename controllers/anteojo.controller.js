let anteojoRepository = require('../repositories/anteojo.repository')


exports.altaModeloAnteojo = (req, res) => {
    let precioVenta= req.body.precioVenta*100 ;
    let precioCompra= req.body.precioCompra*100 ;

    anteojoRepository.altaModeloAnteojo(req.body.marca, req.body.tipo,req.body.material, req.body.codigo,precioCompra, precioVenta, req.body.stock)
        .then(anteojoRegistrado => {
            res.status(200).json({
                ok : true,
                message: 'El anteojo fue agregado exitosamente!',
                data: anteojoRegistrado
            });
        }).catch(error =>{
        res.status(500).json({
            ok: false,
            message: 'Ocurrio un error agregando el anteojo',
            error
        })
    });
}

exports.stockDeAnteojo = (req, res) =>{
    anteojoRepository.stockDeAnteojo(req.query.marca,req.query.tipo,req.query.material, req.query.codigo)
        .then( stock =>{
            if(!stock){
                res.status(200).json({
                    ok: false,
                    message: "no existe un anteojo con esas caracteristicas"
                });
            }else{
                res.status(200).json({
                    ok:true,
                    stock
                });
            }
        })
        .catch( err => {
            res.status(500).json({
                ok:false,
                err
            })
        });
}

exports.stockDeAnteojoConPrecioCompra = (req, res) =>{
    console.log(req.query.marca,req.query.tipo, req.query.material, req.query.codigo);
    anteojoRepository.stockDeAnteojoConPrecioCompra(req.query.marca,req.query.tipo, req.query.material, req.query.codigo)
        .then( stock =>{
                res.status(200).json({
                    ok:true,
                    stock
                });
            }
        )
        .catch( err => {
            res.status(400).json({
                ok:false,
                message: "No existe un anteojo con esas caracteristicas"
            })
        });
}

exports.stockDeAnteojoConPrecioVenta = (req, res) => {
    anteojoRepository.stockDeAnteojo(req.query.marca, req.query.tipo, req.query.material, req.query.codigo)
        .then(stock => {
                res.status(200).json({
                    ok: true,
                    stock
                });
            }
        )
        .catch(err => {
            res.status(204).json({
                ok: false,
                message: "No existe un anteojo con esas caracteristicas"
            })
        });
}

exports.disminuirStock =(req, res) =>{
        anteojoRepository.disminuirStock(req.body.marca,req.body.codigo, req.body.cantidad)
                        .then(anteojo =>{
                            res.status(200).json({
                                ok: true,
                                anteojo: anteojo
                            })
                        }).catch(err=>{
                            res.status(400).json({
                                ok: false,
                                message:"no se pudo realizar la operacion"
                            })
                        });

}