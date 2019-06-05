let anteojoRepository = require('../repositories/anteojo.repository')


exports.altaModeloAnteojo = (req, res) => {
    let precioVenta= req.body.precioVenta*100 ;
    let precioCompra= req.body.precioCompra*100 ;

    anteojoRepository.altaModeloAnteojo(req.body.marca, req.body.tipo,req.body.material, req.body.codigo,req.body.precioCompra,req.bodi.precioVenta, req.body.stock)
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
    anteojoRepository.stockDeAnteojo(req.query.marca,req.query.tipo, req.query.material, req.query.codigo)
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
                message: "No existe un anteojo con esas caracteristicas"
            })
        });
}

exports.stockDeAnteojoConPrecioVenta = (req, res) =>{
    anteojoRepository.stockDeAnteojo(req.query.marca,req.query.tipo, req.query.material, req.query.codigo)
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
                message: "No existe un anteojo con esas caracteristicas"
            })
        });
}