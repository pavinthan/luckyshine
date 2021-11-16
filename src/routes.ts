import type { Request, Server } from '@hapi/hapi';

const route = {
  name: 'index',
  register: async (server: Server) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: (request: Request) => {
        return `Welcome! please find the api documentation at ${request.info.host}/documentation`;
      },
    });
  },
};

export default route;
