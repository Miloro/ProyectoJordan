const Anteojo = require('../models/anteojo.model');

exports.altaModeloAnteojo = (marca, tipo, material, codigo,precioCompra,precioVenta, stock = 0)  => {
    return new Anteojo ({marca: marca,
        tipo: tipo,
        material: material,
        codigo: codigo,
        precioCompra : precioCompra,
        precioVenta : precioVenta,
        stock: stock,
    }).save().then(anteojoRegistrado =>{anteojoRegistrado.precioCompra = anteojoRegistrado.precioCompra/100;
        anteojoRegistrado.precioVenta = anteojoRegistrado.precioVenta/100;
        return anteojoRegistrado});

};

exports.stockDeAnteojo = (marca, tipo, material, codigo) => {
    return Anteojo.findOne({marca: marca,
            tipo: tipo,
            material: material,
            codigo: codigo},
        { precioVenta: 1, stock: 1, _id: 0})
        .then(res => {res.precioVenta = res.precioVenta / 100;
        return res});

}

exports.stockDeAnteojoConPrecioCompra = (marca,tipo, material, codigo) => {
    return Anteojo.findOne({marca: marca,
            tipo: tipo,
            material: material,
            codigo: codigo},
        { precioVenta: 1, precioCompra:1,stock: 1, _id: 0})
        .then(res => {res.precioVenta = res.precioVenta/100;
            res.precioCompra = res.precioCompra/100;
            return res})
}

exports.stockDeAnteojoConPrecioVenta = (marca,tipo,material, codigo,) => {
    return Anteojo.findOne({
            marca: marca,
            tipo: tipo,
            material: material,
            codigo: codigo
        },
        {precioVenta: 1, precioCompra:1,stock: 1,  _id: 0})
        .then(res => {
            res.precioVenta = res.precioVenta / 100;
            res.precioCompra = res.precioCompra / 100;
            return res
        })
}

exports.disminuirStock = (marca ,codigo, cantidad) =>{
    return Anteojo.findOneAndUpdate(
        {marca : marca ,codigo: codigo, "stock": {$gte: cantidad}},
        {$inc:{stock: (-cantidad)}},
        {new : true}
    )
}


