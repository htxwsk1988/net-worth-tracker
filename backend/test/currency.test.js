const chai = require('chai');
const chaiHttp = require('chai-http');
var assert = require('assert');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

describe("Currency", () => {
    describe("GET /", () => {
        it("should return all exhange rate", (done) => {
            chai.request(app)
                .get('/currencies')
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.strictEqual(res.body.length, 5);
                    done();
                })
        })

        it("should return searched currency rate by name", (done) => {
            chai.request(app)
                .get('/currencies/JPY')
                .end((err, res) => {
                    res.should.have.status(200);
                    assert.strictEqual(res.body.rate, 79.73);
                    done();
                })
        })
    })
})