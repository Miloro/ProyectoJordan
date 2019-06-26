let lenteDeContactoRepository = require('../repositories/lenteDeContacto.repository')


exports.altaModelo = (req, res) => {
    let precioVenta= req.body.precioVenta*100 ;
    let precioCompra= req.body.precioCompra*100 ;

    lenteDeContactoRepository.altaModeloAnteojo(req.body.codigo,req.body.marca, req.body.graduacion,req.body.color,precioCompra, precioVenta, req.body.stock)
        .then(lenteDeContactoRegistrado => {
            res.status(200).json({
                ok : true,
                message: 'El Lente de Contacto fue agregado exitosamente!',
                data: lenteDeContactoRegistrado
            });
        }).catch(error =>{
        res.status(500).json({
            ok: false,
            message: 'Ocurrio un error agregando el Lente de Contacto',
            error
        })
    });
}

exports.stockDeLente = (req, res) =>{
    lenteDeContactoRepository.stockDeAnteojo(req.query.codigo,req.query.marca)
        .then( stock =>{
            if(!stock){
                res.status(200).json({
                    ok: false,
                    message: "no existe un Lente de Contacto con esas caracteristicas"
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

exports.stockDeLenteConPrecioCompra = (req, res) =>{
    lenteDeContactoRepository.stockDeLenteConPrecioCompra(req.query.codigo,req.query.marca)
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
                message: "No existe un Lente de Contacto con esas caracteristicas"
            })
        });
}

exports.stockDeLenteConPrecioVenta = (req, res) => {
    lenteDeContactoRepository.stockDeLenteConPrecioVenta(req.query.codigo,req.query.marca)
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
                message: "No existe un Lente de contacto con esas caracteristicas"
            })
        });
}

exports.disminuirStock =(req, res) =>{
    lenteDeContactoRepository.disminuirStock(req.body.codigo,req.body.marca, req.body.cantidad)
        .then(lente =>{
            res.status(200).json({
                ok: true,
                lente: lente
            })
        }).catch(err=>{
        res.status(400).json({
            ok: false,
            message:"no se pudo realizar la operacion"
        })
    });

}

exports.aumentarStock =(req, res) =>{
    lenteDeContactoRepository.aumentarStock(req.body.codigo,req.body.marca, req.body.cantidad)
        .then(lente =>{
                res.status(200).json({
                    ok: true,
                    lente
                })
            }
        )
        .catch( err => {
            res.status(400).json({
                ok: false,
                message:"No se pudo realizar la operacion"
            })
        });}