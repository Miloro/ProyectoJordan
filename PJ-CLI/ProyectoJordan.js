const InvalidDataException = require('../errors/invalidDataException');
const NotFoundException = require('../errors/notFoundException');
const mongoose= require('mongoose');
const MONGURI= require('../config/config').MONGURI;

class ProyectoJordan {
    constructor(commandSelector, consoleService) {
        this.commandSelector = commandSelector;
        this.consoleService = consoleService;
    }

    playConsole(){

        if(!this.consoleService.existCommand()){
            console.log('Ingrese un comando!');
        }

        let command = this.consoleService.command();
        let objectByParameters = this.consoleService.getObjectByArgs();
        let commandHandler = this.commandSelector.findHandler(command);

        if(Boolean(commandHandler)){
            mongoose.connection.openUri(MONGURI,
                (err,res) => {
                    if ( err ) throw err;
                        try{
                            console.log('BBDD: \x1b[32m%s\x1b[0m', 'online');
                            commandHandler.handle(objectByParameters,mongoose).then(
                                //Una vez que termina, cierra la conexion.
                            //    mongoose.connection.close()
                            )}
            
           //     commandHandler.handle(objectByParameters).then(
                    //Una vez que termina, cierra la conexion.
           //         mongoose.connection.close())
             catch (error) {
                mongoose.connection.close();
                if (error instanceof InvalidDataException) {
                    console.log(error.messageDetail());
                }
                if (error instanceof NotFoundException) {
                    console.log(error.messageDetail());
                } else {
                //    console.log(error);
                }
            }
        })}else {
            console.log(`No se encontró un handler para el comando: ${command}`);

        }
    }
}

module.exports = ProyectoJordan;