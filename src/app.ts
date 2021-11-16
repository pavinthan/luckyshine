import { server } from '@hapi/hapi';
import dotenv from 'dotenv';
import { host as defaultHost, port as defaultPort } from './config';
import { swaggerPlugins } from './plugins';
import routes from './routes';
import type {
  Server,
  ServerInfo,
  ServerInjectOptions,
  ServerInjectResponse,
} from '@hapi/hapi';

dotenv.config();

export class App {
  private app?: Server;

  public async init(host?: string, port?: string) {
    if (!host) {
      host = defaultHost;
    }

    if (!port) {
      port = defaultPort;
    }

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

  public inject(
    options: string | ServerInjectOptions
  ): Promise<ServerInjectResponse> | undefined {
    return this.app?.inject(options);
  }

  public info(): ServerInfo | undefined {
    return this.app?.info;
  }
}
