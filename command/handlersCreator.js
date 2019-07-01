const CrearAnteojo = require('./handlers/crearAnteojo');   

class HandlersCreator{     
    static getHandlers() {         
        let crearAnteojo = new CrearAnteojo();          
        let handlers = [];         
        handlers.push(crearAnteojo);          
        return handlers;      
    }}  
    
module.exports = HandlersCreator;