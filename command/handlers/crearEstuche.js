const HandlerWithValidator = require('./handlerWithValidator');
const EstucheRepository = require('../../repositories/estuche.repository');  

class CrearEstuche extends HandlerWithValidator {      
    constructor() {          
        super("CrearEstuche", ['codigo', 'color', 'marca', 'stock', 'material', 'precioCompra', 'precioVenta']);      
    }      
        
    canHandle(aCommand) {          
        return this.command === aCommand;      
    }       
    
    handle(data, mongoose) {          
        this.validate(data);          
        let {codigo, marca, stock, material,color, precioCompra, precioVenta} = data;
        
        return EstucheRepository.altaModeloEstuche(marca, material, color, codigo, precioCompra, precioVenta, stock)
                        .then( res=> {
                            mongoose.connection.close();         
                            return console.log(`Se creó el estuche { ${color} } de la marca: { ${marca} } de material: { ${material} }, con codigo: { ${codigo} }`);
                        })     
    }   
}

module.exports= CrearEstuche;