const Estuche = require('../models/estuche.model');

// Busquen la documentacion en la pagina de MongoDB.
// Ahi van a ver todos los metodos de busqueda y que parametros aceptan, y para que sirve cada uno.
// Solo les voy a decir una cosa que puede que pasen de largo: Todos los metodos de mongoose devuelven Promises.
// Lean sobre eso en documentacion de Node (videos en youtube tambien son validos) para saber como se usan y para que sirven.
// LEAN LEAN LEAN LEEEEAAANNN!!!!!

exports.altaModeloEstuche =(marca, material, color, codigo, precioCompra, precioVenta, stock = 0)  => {
    return new Estuche({
        marca: marca,
        material: material,
        color: color,
        precioCompra: precioCompra,
        precioVenta: precioVenta,
        codigo: codigo,
        stock: stock
    }).save().then(estucheRegistrado =>{ estucheRegistrado.precioCompra = estucheRegistrado.precioCompra/100;
                                        estucheRegistrado.precioVenta = estucheRegistrado.precioVenta/100;
                                        return estucheRegistrado});                
};

exports.stockDeEstuche = (marca, material, color, codigo) => {
    return Estuche.findOne({marca: marca, 
                            material: material, 
                            color: color, 
                            codigo: codigo},
                            { stock: 1, precioVenta: 1, _id: 0})
                  .then(res => {res.precioVenta = res.precioVenta/100; 
                                return res}); 
}

exports.stockDeEstucheConPrecioCompra = (marca, material, color, codigo) => {
    return Estuche.findOne({marca: marca, 
                            material: material, 
                            color: color, 
                            codigo: codigo},
                            { stock: 1, precioVenta: 1, precioCompra:1, _id: 0})
                    .then(res => {res.precioVenta = res.precioVenta/100;
                                res.precioCompra = res.precioCompra/100; 
                                    return res}); 
}

exports.quitarDelStock = (cantidad, codigo) => {
    return Estuche.findOneAndUpdate({codigo: codigo, "stock": {$gte: cantidad}},
                                    {$inc:{stock: (cantidad*-1)}},
                                    {new: true})
                                    .then(res => {res.precioVenta = res.precioVenta/100;
                                        res.precioCompra = res.precioCompra/100; 
                                            return res}); 
}