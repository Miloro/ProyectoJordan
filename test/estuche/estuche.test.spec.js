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
        const result= await estucheRepository.stockDeEstuche("Ray-Ban", "Plastico", "Negro", "E001")
        assert.strictEqual(result.stock, 10);
    });

});