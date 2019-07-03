const ProyectoJordan= require('./PJ-CLI/ProyectoJordan');
const HandlersCreator = require('./command/handlersCreator');
const CommandSelector = require('./command/commandSelector');
const ConsoleService = require('./services/consoleService');

const parsedArgs = configureParameterAsArray();

function configureParameterAsArray() {
   // let parameterToConfigure = 'genres';
    return require('yargs').argv;
}

function main() {     
    console.log('Proyecto Jordan está ejecutando..');       

    let handlersToRegister = HandlersCreator.getHandlers();
    let commandSelector = new CommandSelector(handlersToRegister);
    let consoleService = new ConsoleService(parsedArgs);
    let proyectoJordan = new ProyectoJordan (commandSelector, consoleService);

    proyectoJordan.playConsole();
}

main();