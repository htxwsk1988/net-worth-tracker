const chai = require('chai');
const chaiHttp = require('chai-http');
var assert = require('assert');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

describe("Liabilities", () => {
    describe("GET /", () => {
        it("should return all liabilities", (done) => {
            chai.request(app)
                .get('/liabilities')
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.strictEqual(res.body.length, 8);
                    done();
                })
        })

        it("should return searched liability", (done) => {
            chai.request(app)
                .get('/liabilities/3')
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.strictEqual(res.body.name, 'Mortgage 1');
                    assert.strictEqual(res.body.amount, 250999);
                    done();
                })
        })

        it("should return liabilities sum", (done) => {
            chai.request(app)
                .get('/liabilities/sum')
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.strictEqual(res.body, 908297);
                    done();
                })
        })
    })

    describe("POST /", () => {
        it("should update liability amount", (done) => {
            chai.request(app)
                .post('/liabilities/update/1')
                .send({ amount: 120 })
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.strictEqual(res.body.amount, 120);
                    done();
                })
        })

        it("should add a new liability", (done) => {
            chai.request(app)
                .post('/liabilities/add')
                .send({ id: 9, 
                    name: 'test liability',
                    monthlyPayment: 15,
                    amount: 120 ,
                    shortTerm: true
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.strictEqual(res.body.length, 9);
                    done();
                })
        })
    })
})