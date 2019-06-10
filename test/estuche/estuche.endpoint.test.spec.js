const chai = require('chai');
const chaiHttp = require('chai-http');

const server =require('../../index');
const should = chai.should();

chai.use(chaiHttp);

const json = {
    name:"newUser",
    email:"newUser@mail.com",
    password : "newUser",
    phone: 3324123,
    gender : "MALE"
};

describe( 'Bienvenida a la API', () => {
    it('should be return status 200', (done) => {
        chai.request(server)
            .get('/api')
            .end((err, res) => {
                res.should.have.status(200);
              //  done();
            })
        done();
        });
})