/* global it */
const chai = require('chai');
const chaiHttp = require('chai-http');
const auth = require('../src/middleware/auth');
chai.use(chaiHttp);
const { expect } = chai;

it('Negative Test Should should check for invalid login', (done) => {
    chai.request('http://127.0.0.1:3001')
        .post('/customer/customerlogin')
        .send({ password: '12345', email_id: 'test@test.com' })
        .end((err, res) => {
            expect(res).to.have.status(400);
            done();
        });
});

it('Positive Test Should check credentials and return status code', (done) => {
    chai.request('http://127.0.0.1:3001')
        .post('/customer/customerlogin')
        .send({ email_id: 'kalyanideshmukh11@gmail.com', password: 'Deshmukh' })
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
});
it('GET restaurant list', (done) => {
    chai.request('http://127.0.0.1:3001')
        .get('/orders/list')
        .end((err, res) => {
            expect(res).to.have.status(402);
            done();
        });
});
it('Positive Signup Test', (done) => {
    chai.request('http://127.0.0.1:3001')
        .post('/customer/customersignup')
        .send({
            email_id: 'testcase7@test.com',
            password: 'test',
            first_name: 'Test7',
            last_name: 'User'
        })
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
});
it('GET events list', (done) => {
    chai.request('http://127.0.0.1:3001',auth)
        .get('/events/list')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
});