class NotFoundException extends Error {
    constructor(type, keyToFind, message='') {
        super(message);
        this.type = type;
        this.keyToFind = keyToFind;
    }

    getType(){
        return this.type;
    }

    messageDetail(message){
        let detail = ` No se encontró: ${this.keyToFind}, de tipo: ${this.getType()}. `;
        return message + detail;
    }
}

module.exports = NotFoundException;