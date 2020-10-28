const chai = require('chai');
const chaiHttp = require('chai-http');
var assert = require('assert');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

describe("Assets", () => {
    describe("GET /", () => {
        it("should return all assets", (done) => {
            chai.request(app)
                .get('/assets')
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.strictEqual(res.body.length, 13);
                    done();
                })
        })

        it("should return searched asset", (done) => {
            chai.request(app)
                .get('/assets/5')
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.strictEqual(res.body.name, 'Savings for Travel');
                    done();
                })
        })

        it("should return assets sum", (done) => {
            chai.request(app)
                .get('/assets/sum')
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.strictEqual(res.body, 2200427);
                    done();
                })
        })
    })

    describe("POST /", () => {
        it("should update asset amount", (done) => {
            chai.request(app)
                .post('/assets/update/1')
                .send({ amount: 120 })
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.strictEqual(res.body.amount, 120);
                    done();
                })
        })
    })
})