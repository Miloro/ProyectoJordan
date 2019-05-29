describe('dao', ()=>{
    const assert = require('assert');
    const mongoose = require('mongoose');
    const cristalRepository= require('../../repositories/cristal.repository');

    before(function(done) {
        if (mongoose.connection.db) return done();
        mongoose.connect('mongodb://localhost/puan_test1', done);
    });
    
    it('Debería devolver 10 cuando pido stock de cristales de la marca aaa', async () => {

        await cristalRepository.altaModeloCristal("aaa", 10);
        const result= await cristalRepository.stockDeCristal("aaa");
        assert.strictEqual(result.stock, 10);
    });
});
