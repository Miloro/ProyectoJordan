const Cristal = require('../models/cristal.model');

// Busquen la documentacion en la pagina de MongoDB.
// // Ahi van a ver todos los metodos de busqueda y que parametros aceptan, y para que sirve cada uno.
// // Solo les voy a decir una cosa que puede que pasen de largo: Todos los metodos de mongoose devuelven Promises.
// // Lean sobre eso en documentacion de Node (videos en youtube tambien son validos) para saber como se usan y para que sirven.
// // LEAN LEAN LEAN LEEEEAAANNN!!!!!

exports.altaModeloCristal =(marca, stock = 0)  => {
    return new Cristal({
        marca: marca,
        stock: stock
    }).save();                
};

exports.stockDeCristal = (marca) =>{
    return Cristal.findOne({
        marca: marca
    },{stock:1, _id: 0});
}