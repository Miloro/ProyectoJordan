const Anteojo = require('../models/anteojo.model');

exports.altaModeloAnteojo = (marca, tipo, material, codigo,precioCompra,precioVenta, stock = 0)  => {
    return new Anteojo ({
        marca: marca,
        tipo: tipo,
        material: material,
        codigo: codigo,
        precioCompra:precioCompra,
        precioVenta:precioVenta,
        stock: stock
    }).save();
};

exports.findAll = () => {
    return Anteojo.find();
}

exports.stockDeAnteojo = (marca, tipo, material, codigo) => {
    return Anteojo.findOne({marca: marca,
            tipo: tipo,
            material: material,
            codigo: codigo},
        { stock: 1, _id: 0});
}

exports.stockDeAnteojoConPrecioCompra = (marca,tipo, material, codigo) => {
    return Anteojo.findOne({marca: marca,
            tipo: tipo,
            material: material,
            codigo: codigo},
        { stock: 1, precioVenta: 0, precioCompra:1, _id: 0})
        .then(res => {res.precioVenta = res.precioVenta/100;
            res.precioCompra = res.precioCompra/100;
            return res});
}

exports.stockDeAnteojoConPrecioVenta = (marca,tipo, codigo) => {
    return Anteojo.findOne({
            marca: marca,
            tipo: tipo,
            material: material,
            codigo: codigo
        },
        {stock: 1, precioVenta: 1, precioCompra: 0, _id: 0})
        .then(res => {
            res.precioVenta = res.precioVenta / 100;
            res.precioCompra = res.precioCompra / 100;
            return res
        });
}

