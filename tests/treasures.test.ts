import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';
import { host, port } from '../src/config';

chai.use(chaiHttp);

describe('end-to-end / integration tests', () => {
  const API = `http://${host}:${port}`;

  beforeAll(async () => {
    await app.init();
    await app.start();
  });

  beforeEach(() => {
    //
  });

  afterAll(async () => {
    await app.stop();
  });

  describe('Treasures endpoint', () => {
    it('Should return bad request if latitude is empty', (done) => {
      chai
        .request(API)
        .get('/treasures?longitude=103.8774815&distance=10&prize_value=10')
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });

    it('Should return bad request if longitude is empty', (done) => {
      chai
        .request(API)
        .get('/treasures?latitude=1.32303589&distance=10&prize_value=10')
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });

    it('Should return bad request if longitude is empty', (done) => {
      chai
        .request(API)
        .get(
          '/treasures?latitude=1.32303589&longitude=103.8774815&prize_value=10'
        )
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });

    it('Should return all treasures in the database', (done) => {
      chai
        .request(API)
        .get(
          '/treasures?latitude=1.32303589&longitude=103.8774815&distance=10&prize_value=10'
        )
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
