const HandlerWithValidator = require('./handlerWithValidator');
const AnteojoRepository = require('../../repositories/anteojo.repository');  

class CrearAnteojo extends HandlerWithValidator {      
    constructor() {          
        super("CrearAnteojo", ['marca', 'tipo', 'material','codigo', 'precioCompra','precioVenta','stock']);      
    }      
        
    canHandle(aCommand) {          
        return this.command === aCommand;      
    }       
    
    handle(data, mongoose) {          
        this.validate(data);          
        let {marca, tipo, material,codigo,precioCompra,precioVenta,stock} = data;

        return AnteojoRepository.altaModeloAnteojo(marca,tipo,material,codigo,precioCompra,precioVenta,stock)
                        .then( res=> {
                            mongoose.connection.close();         
                            return console.log(`Se creó el anteojo de la marca: { ${marca} } del tipo: { ${tipo} }, con codigo: { ${codigo} }`);
                        });      
    }   
}

module.exports= CrearAnteojo;