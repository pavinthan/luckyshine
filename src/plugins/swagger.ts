import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import { swaggerOptions } from '../config';
import * as HapiSwagger from 'hapi-swagger';
import type { ServerRegisterPluginObject } from '@hapi/hapi';

const swaggerPlugins: Array<ServerRegisterPluginObject<any>> = [
  {
    plugin: Inert,
  },
  {
    plugin: Vision,
  },
  {
    plugin: HapiSwagger,
    options: swaggerOptions,
  },
];

export default swaggerPlugins;
