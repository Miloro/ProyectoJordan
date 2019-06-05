const Estuche = require('../models/estuche.model');

// Busquen la documentacion en la pagina de MongoDB.
// Ahi van a ver todos los metodos de busqueda y que parametros aceptan, y para que sirve cada uno.
// Solo les voy a decir una cosa que puede que pasen de largo: Todos los metodos de mongoose devuelven Promises.
// Lean sobre eso en documentacion de Node (videos en youtube tambien son validos) para saber como se usan y para que sirven.
// LEAN LEAN LEAN LEEEEAAANNN!!!!!



exports.stockDeEstucheConPrecioCompra = (marca, material, color, codigo) => {
    return Estuche.findOne({marca: marca, 
                            material: material, 
                            color: color, 
                            codigo: codigo},

                            { stock: 1, _id: 0});
};

                            { stock: 1, precioVenta: 1, precioCompra:1, _id: 0})
                    .then(res => {res.precioVenta = res.precioVenta/100;
                                res.precioCompra = res.precioCompra/100; 
                                    return res}); 
}

