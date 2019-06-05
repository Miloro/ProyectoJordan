let cristalRepository = require('../repositories/cristal.repository') 


exports.altaModeloCristal = (req, res) => {
    cristalRepository.altaModeloCristal(req.body.marca, req.body.stock)
                        .then(cristalRegistrado => {
                                            res.status(200).json({
                                                ok : true,
                                                message: 'El  fue agregado exitosamente!',
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