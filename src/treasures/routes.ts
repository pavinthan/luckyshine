import { TreasureController } from './controller';
import type { Server } from '@hapi/hapi';

const controller = new TreasureController();

const treasureRoutes = {
  name: 'treasures',
  register: async (server: Server) => {
    server.route([
      {
        method: 'GET',
        path: '/treasures',
        handler: controller.index,
        options: {
          tags: ['api'],
        },
      },
    ]);
  },
};

export default treasureRoutes;
