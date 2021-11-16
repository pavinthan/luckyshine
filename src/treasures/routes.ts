import Joi from 'joi';
import { TreasureController } from './controller';
import type { Server } from '@hapi/hapi';

const controller = new TreasureController();

const treasureRoutes = {
  name: 'Treasures',
  register: async (server: Server) => {
    server.route([
      {
        method: 'GET',
        path: '/treasures',
        handler: controller.index,
        options: {
          tags: ['api'],
          validate: {
            query: Joi.object({
              latitude: Joi.number().min(0).max(90).required(),
              longitude: Joi.number().min(-180).max(180).required(),
              distance: Joi.number().integer().min(1).max(10).required(),
              prize_value: Joi.number().integer().min(10).max(30).default(10),
            }).options({ stripUnknown: true }),
          },
        },
      },
    ]);
  },
};

export default treasureRoutes;
