const CrearAnteojo = require('./handlers/crearAnteojo');   
const CrearCristal = require('./handlers/crearCristal');
const CrearEstuche = require('./handlers/crearEstuche');
class HandlersCreator{     
    static getHandlers() {         
        let crearAnteojo = new CrearAnteojo();
        let crearCristal = new CrearCristal();
        let crearEstuche = new CrearEstuche();
        let handlers = [];         
        handlers.push(crearAnteojo);
        handlers.push(crearCristal);
        handlers.push(crearEstuche);
        return handlers;      
    }}  
    
module.exports = HandlersCreator;