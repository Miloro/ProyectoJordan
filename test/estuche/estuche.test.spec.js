describe('dao', ()=>{
    const assert = require('assert');
    const mongoose = require('mongoose');
    const estucheRepository= require('../../repositories/estuche.repository');
    
    before(function (done){
      //Another possibility is to check if mongoose.connection.readyState equals 1
      if (mongoose.connection.db) return done();
      mongoose.connect('mongodb://localhost/puan_test', done);
    });
  
  // You can put one ‘after()’ statement above all else that will run when all tests are finished
  after(function (done){
    mongoose.connection.db.dropDatabase(function(){
      mongoose.connection.close(function(){
        done();
      });
    });
  });
   
    it('should return 10 when I ask for Estuches stock', async () => {
      await estucheRepository.altaModeloEstuche("Ray-Ban", "Plastico", "Negro", "E001",230.00, 100, 10);
        const resultado= await estucheRepository.stockDeEstuche("Ray-Ban", "Plastico", "Negro", "E001")
        assert.strictEqual(resultado.stock, 10);
    });

    it('should return 9 when I try to take 1 case out of stock', async() =>{
      await estucheRepository.altaModeloEstuche("Ray-Ban", "Plastico", "Negro", "E002",230.00, 100, 10);
      const resultado= await estucheRepository.quitarDelStock(1,"E002");
      assert.strictEqual(resultado.stock,9);
    })
    
    it('should return error when I try to take 1 case out of stock and no stock', async() =>{
      await estucheRepository.altaModeloEstuche("Ray-Ban", "Plastico", "Negro", "E003",230.00, 100);
      const resultado= await estucheRepository.quitarDelStock(1,"E003");
      assert.strictEqual(resultado, null);
    })

});