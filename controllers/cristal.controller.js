let cristalRepository = require('../repositories/cristal.repository') 


exports.altaModeloCristal = (req, res) => {
    let precioCompra = req.body.precioCompra*100 ;
    let precioVenta  = req.body.precioVenta*100 ;
    cristalRepository.altaModeloCristal(req.body.marca, req.body.stock,req.body.material, req.body.tipo, precioCompra,precioVenta)
                        .then(cristalRegistrado => {
                                            res.status(200).json({
                                                ok : true,
                                                message: 'El Cristal fue agregado exitosamente!',
                                                data: cristalRegistrado
                                            });
                        }).catch(error =>{
                                        res.status(500).json({
                                            ok: false,
                                            message: 'Ocurrio un error agregando el cristal',
                                            error
                                        })
                        });
};

exports.stockDeCristal = (req, res) =>{
    cristalRepository.stockDeCristal(req.query.marca)
                        .then( stock =>{
                            if(!stock){
                                res.status(400).json({
                                    ok:false,
                                    message: "no existe un cristal con esa marca"
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

};

exports.stockConPrecioCompra = (req, res)=>{
    cristalRepository.stockConPrecioCompraDeCristal(req.query.marca)
                        .then( stock =>{
                            if(!stock){
                                res.status(400).json({
                                    ok:false,
                                    message:"no existe un cristal con esa marca"
                                });
                            }else{
                                res.status(200).json({
                                    ok:true,
                                    stock,
                                });
                            }
                        })
                        .catch( err => {
                            res.status(500).json({
                                ok:false,
                                err
                            });
                        })
}

exports.stockConPrecioVenta =(req, res) =>{
    cristalRepository.stockConPrecioVentaDeCristal(req.query.marca)
                        .then( stock =>{
                            if(!stock){
                                res.status(400).json({
                                    ok : false,
                                    message : "no existe un cristal con esa marca"
                                })
                            }else{
                                res.status(200).json({
                                    ok: true,
                                    stock
                                })
                            }
                        })
                        .catch( err => {
                            res.status(500).json({
                                ok: false,
                                err
                            })
                        })
}

exports.disminuirStock =(req, res) =>{
    cristalRepository.disminuirStock(req.body.marca, req.body.cantidad)
                        .then(cristal =>{
                            if(!cristal){
                                res.status(400).json({
                                    ok: false,
                                    message:"no se pudo realizar la operacion"
                                })
                            }else{
                                res.status(200).json({
                                    ok: true,
                                    cristal
                                })
                            }
                        })
                        .catch( err => {
                            res.status(500).json({
                                ok: false,
                                err
                            })
                        })
                    }




