const HandlerWithValidator = require('./handlerWithValidator');
const CristalRepository = require('../../repositories/cristal.repository');  

class CrearCristal extends HandlerWithValidator {      
    constructor() {          
        super("CrearCristal", ['codigo', 'marca', 'stock', 'material', 'tipo', 'precioCompra', 'precioVenta']);      
    }      
        
    canHandle(aCommand) {          
        return this.command === aCommand;      
    }       
    
    handle(data, mongoose) {          
        this.validate(data);          
        let {codigo, marca, stock, material, tipo, precioCompra, precioVenta} = data;

        return CristalRepository.altaModeloCristal(codigo, marca, stock, material, tipo, precioCompra, precioVenta)
                        .then( res=> {
                            mongoose.connection.close();         
                            return console.log(`Se creó el cristal de la marca: { ${marca} } del tipo: { ${tipo} }, con codigo: { ${codigo} }`);
                        });      
    }   
}

module.exports= CrearCristal;