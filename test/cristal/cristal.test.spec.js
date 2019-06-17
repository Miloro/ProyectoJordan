describe('dao', ()=>{
    const assert = require('assert');
    const mongoose = require('mongoose');
    const cristalRepository= require('../../repositories/cristal.repository');

    before(function(done) {
        if (mongoose.connection.db) return done();
        mongoose.connect('mongodb://localhost/puan_test1', done);
    });
    
    it('Debería devolver 10 cuando pido stock de cristales de la marca aaa', async () => {

        await cristalRepository.altaModeloCristal("ABC123", "aaa",10,"CRISTAL", "BI_FOCAL",100, 128.3);
        const result = await cristalRepository.stockDeCristal("aaa");
        assert.strictEqual(result.stock, 10);
    });

    it('Debería devolver 99 cuando descuento una unidad del stock cristales de la marca aaaa', async () => {

        await cristalRepository.altaModeloCristal("ABC123" ,"aaaa",100,"CRISTAL", "BI_FOCAL",100, 128.3);
        await cristalRepository.disminuirStock("aaaa", 1);
        const result = await cristalRepository.stockDeCristal("aaaa");
        assert.strictEqual(result.stock, 99);
    });
});
