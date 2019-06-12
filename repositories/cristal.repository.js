const Cristal = require('../models/cristal.model');

// Busquen la documentacion en la pagina de MongoDB.
// // Ahi van a ver todos los metodos de busqueda y que parametros aceptan, y para que sirve cada uno.
// // Solo les voy a decir una cosa que puede que pasen de largo: Todos los metodos de mongoose devuelven Promises.
// // Lean sobre eso en documentacion de Node (videos en youtube tambien son validos) para saber como se usan y para que sirven.
// // LEAN LEAN LEAN LEEEEAAANNN!!!!!

exports.altaModeloCristal =(marca, stock = 0, material, tipo, precioCompra, precioVenta)  => {
    return new Cristal({
        marca: marca,
        stock: stock,
        material: material,
        tipo: tipo,
        precioCompra: precioCompra,
        precioVenta : precioVenta
    }).save().then(cristalRegistrado =>{cristalRegistrado.precioCompra = cristalRegistrado.precioCompra/100;
                                        cristalRegistrado.precioVenta  = cristalRegistrado.precioVenta/100; 
                                        return cristalRegistrado});                
}


exports.stockDeCristal = (marca) =>{
    return Cristal.findOne({
        marca: marca
    },{stock:1, _id: 0});
}

exports.stockConPrecioCompraDeCristal = (marca) =>{
    return Cristal.findOne({
        marca:marca
    },{stock:1, precioCompra:1, precioVenta:1, _id:0}).then(res =>{
        res.precioCompra = res.precioCompra/100;
        res.precioVenta = res.precioVenta/100;
        return res;
    });
}

exports.stockConPrecioVentaDeCristal = (marca) =>{
    return Cristal.findOne({
        marca:marca       
    },{stock:1 , precioVenta:1, _id:0}).then(res =>{
        res.precioVenta = res.precioVenta/100;
        return res;
    })
}

exports.disminuirStock = (marca , cantidad) =>{
    return Cristal.findOneAndUpdate(
        {marca : marca , "stock": {$gte: cantidad}},
        {$inc:{stock: (-cantidad)}},
        {new : true}
    ).then(res =>{
        res.precioCompra = res.precioCompra/100;
        res.precioVenta = res.precioVenta/100;
        return res;
    });
}