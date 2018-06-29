const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server/server.js');

describe('[wines]', function () {
    let wine;
    let id;
    let retrievedwine;

    beforeEach(() => {
        wine = {
            type: 'red',
            name: 'wine',
            year: 1970,
            country: 'germany',
            description: 'description',
        };
    });

    it('should get all wines', function (done) {
        this.timeout(500);
        setTimeout(done, 300);
        request(app)
            .get('/wines')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, resp) => {
                expect(resp.body).to.be.an('array');
                done();
            });
    });

    it('should create a new wine', (done) => {
        this.timeout(500);
        setTimeout(done, 300);
        request(app)
            .post('/wines')
            .send(wine)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err, res) => {
                const reswine = res.body;

                expect(reswine.type).to.be.equal('red');
                expect(reswine.name).to.be.equal('wine');
                expect(reswine.year).to.be.equal(1970);
                expect(reswine.country).to.be.equal('germany');
                expect(reswine.description).to.be.equal('description');
                expect(reswine.id).to.be.equal('1');
                id = reswine.id;

                done();
            });
    });

    it('should get a wine by ID', (done) => {
        this.timeout(500);
        setTimeout(done, 300);
        request(app)
            .get('/wines/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(wine.type).to.be.equal('red');
                expect(wine.name).to.be.equal('wine');
                expect(wine.year).to.be.equal(1970);
                expect(wine.country).to.be.equal('germany');
                expect(wine.description).to.be.equal('description');
                expect(res.body.id).to.be.equal('1');

                retrievedwine = {
                    type: res.body.type,
                    name: res.body.name,
                    year: res.body.year,
                    country: res.body.country,
                    description: res.body.description,
                    id: res.body.id,
                };

                done();
            });
    });

    it('should update a wine by ID', (done) => {
        this.timeout(500);
        setTimeout(done, 300);
        const updatedwine = retrievedwine;
        // updatedwine.age = '44';

        request(app)
            .put('/wines/1')
            .send(updatedwine)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(wine.type).to.be.equal('red');
                expect(wine.name).to.be.equal('wine');
                expect(wine.year).to.be.equal(1970);
                expect(wine.country).to.be.equal('germany');
                expect(wine.description).to.be.equal('description');
                expect(res.body.id).to.be.equal('1');

                retrievedwine = {
                    type: res.body.type,
                    name: res.body.name,
                    year: res.body.year,
                    country: res.body.country,
                    description: res.body.description,
                    id: res.body.id,
                };

                done();
            });
    });

    it('should delete a wine by ID', (done) => {
        this.timeout(500);
        setTimeout(done, 300);
        request(app)
            .delete('/wines/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(wine.type).to.be.equal('red');
                expect(wine.name).to.be.equal('wine');
                expect(wine.year).to.be.equal(1970);
                expect(wine.country).to.be.equal('germany');
                expect(wine.description).to.be.equal('description');
                expect(res.body.id).to.be.equal('1');
            });

        request(app)
            .get('/wines/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.not.deep.include({
                    retrievedwine,
                });
                done();
            });
    });
});
