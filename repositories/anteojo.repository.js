const Estuche = require('../models/anteojo.model');

exports.altaModeloAnteojo = (marca, tipo, material,  codigo, stock = 0)  => {
    return new Anteojo({
        marca: marca,
        tipo: tipo,
        material: material,
        codigo: codigo,
        stock: stock
    }).save();
};

exports.findAll = () => {
    return Estuche.find();
}

exports.stockDeAnteojo = (marca, tipo, material, codigo) => {
    return Anteojo.findOne({marca: marca,
            tipo: tipo,
            material: material,
            codigo: codigo},
        { stock: 1, _id: 0});
}