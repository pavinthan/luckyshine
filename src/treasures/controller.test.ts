import { App } from '../app';
import { TreasureService } from './service';
import { host } from '../config';
import { mocked } from 'ts-jest/utils';

const port = '6000';

describe('tests for treasures controller', () => {
  const app = new App();

  beforeAll(async () => {
    mocked(TreasureService, true);
    await app.init(host, port);
  });

  beforeEach(async () => {
    //
  });

  afterAll(async () => {
    await app.stop();
  });

  test('#index() should function as expected', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/treasures',
    });

    if (response) {
      await expect(response.statusCode).toBe(400);
    }
  });

  test('#store() should function as expected', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/treasures',
    });

    if (response) {
      await expect(response.statusCode).toBe(400);
    }
  });
});
