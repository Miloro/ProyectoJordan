const CrearAnteojo = require('./handlers/crearAnteojo');   
const CrearCristal = require('./handlers/crearCristal');
class HandlersCreator{     
    static getHandlers() {         
        let crearAnteojo = new CrearAnteojo();
        let crearCristal = new CrearCristal();
        let handlers = [];         
        handlers.push(crearAnteojo);
        handlers.push(crearCristal);
        return handlers;      
    }}  
    
module.exports = HandlersCreator;