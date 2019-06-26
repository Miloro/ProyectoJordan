const LenteDeContacto = require('../models/lenteDeContacto.model');

exports.altaModelo = (codigo,marca, graduacion, color,precioCompra,precioVenta,stock)  => {
    return new LenteDeContacto ({codigo: codigo,
        marca: marca,
        graduacion: graduacion,
        color: color,
        precioCompra : precioCompra,
        precioVenta : precioVenta,
        stock: stock
    }).save().then(lenteDeContactoRegistrado =>{lenteDeContactoRegistrado.precioCompra = lenteDeContactoRegistrado.precioCompra/100;
        lenteDeContactoRegistrado.precioVenta = lenteDeContactoRegistrado.precioVenta/100;
        return lenteDeContactoRegistrado});

}

exports.stockDeLente = (codigo,marca) => {
    return LenteDeContacto.findOne({codigo: codigo,
            marca: marca,},
        { precioVenta: 1, stock: 1, _id: 0})
        .then(res => {if (!res) return res
            res.precioVenta = res.precioVenta/100;
            return res});

}

exports.stockDeLenteConPrecioCompra = (codigo,marca) => {
    return LenteDeContacto.findOne({codigo: codigo,
            marca: marca,},
        { precioVenta: 1, precioCompra:1,stock: 1, _id: 0})
        .then(res => {res.precioVenta = res.precioVenta/100;
            res.precioCompra = res.precioCompra/100;
            return res})
}

exports.stockDeLenteConPrecioVenta = (codigo,marca) => {
    return LenteDeContacto.findOne({codigo: codigo,
            marca: marca,
            },
        {precioVenta: 1, precioCompra:1,stock: 1,  _id: 0})
        .then(res => {
            res.precioVenta = res.precioVenta/100;
            res.precioCompra = res.precioCompra/100;
            return res
        })
}

exports.disminuirStock = (codigo,marca , cantidad) => {
    return LenteDeContacto.findOneAndUpdate(
        {codigo: codigo,marca: marca, "stock": {$gte: cantidad}},
        {$inc: {stock: (-cantidad)}},
        {new: true}
    ).then(res => {
        res.precioCompra = res.precioCompra / 100;
        res.precioVenta = res.precioVenta / 100;
        return res;
    });
}
exports.aumentarStock = (codigo,marca,cantidad) =>{
    return LenteDeContacto.findOneAndUpdate(
        {codigo:codigo,marca : marca, "stock": {$gte: cantidad}},
        {$inc:{stock: (cantidad)}},
        {new : true}
    ).then(res =>{
        res.precioCompra = res.precioCompra/100;
        res.precioVenta = res.precioVenta/100;
        return res;
    });}
