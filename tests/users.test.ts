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
    it('Live server should return all treasures in the database', (done) => {
      chai
        .request(API)
        .get('/treasures')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
