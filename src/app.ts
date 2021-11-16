import { server } from '@hapi/hapi';
import dotenv from 'dotenv';
import { port, host } from './config';
import { swaggerPlugins } from './plugins';
import routes from './routes';
import type { Server, ServerInfo } from '@hapi/hapi';

dotenv.config();

class App {
  private app?: Server;

  public async init() {
    this.app = server({ port, host });

    await Promise.all([
      this.app.register(swaggerPlugins, { once: true }),
      this.app.register(routes, { once: true }),
    ]);

    await this.app?.initialize();
  }

  public async start() {
    await this.app?.start();
  }

  public async stop() {
    await this.app?.stop();
  }

  public info(): ServerInfo | undefined {
    return this.app?.info;
  }
}

const app = new App();

export default app;
