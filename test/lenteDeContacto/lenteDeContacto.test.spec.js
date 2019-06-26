describe('dao', ()=>{
    const assert = require('assert');
    const mongoose = require('mongoose');
    const lenteDeContactoRepository= require('../../repositories/lenteDeContacto.repository');

    before(function(done) {
        if (mongoose.connection.db) return done();
        mongoose.connect('mongodb://localhost/puan_test1', done);
    });

    it('Debería devolver 2 cuando pido stock de Lente de Contacto de la marca x con codigo A10', async () => {

        await lenteDeContactoRepository.altaModelo("A10","x",10,"azul",10.00,20,2);
        const result= await lenteDeContactoRepository.stockDeLente("A10","x");
        assert.strictEqual(result.stock, 2);
    });


});
