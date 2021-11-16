import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { App } from '../src/app';
import { host } from '../src/config';

const port = '6000';
chai.use(chaiHttp);

describe('integration tests', () => {
  const app = new App();
  const API = `http://${host}:${port}`;

  beforeAll(async () => {
    await app.init(host, port);
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

    it('Should return all valid treasures in the database', (done) => {
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

    it('Should return created response', (done) => {
      chai
        .request(API)
        .post('/treasures')
        .send({
          name: 'Example',
          latitude: 1.32303589,
          longitude: 103.8774815,
          prize_value: 10,
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          done();
        });
    });
  });
});
