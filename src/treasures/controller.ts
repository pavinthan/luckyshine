import Boom from '@hapi/boom';
import { TreasureService } from './service';
import type { Request, ResponseToolkit } from '@hapi/hapi';

export class TreasureController {
  public async index(request: Request, h: ResponseToolkit) {
    try {
      const result = await new TreasureService().getAll();
      return h.response(result).code(200);
    } catch (error) {
      return Boom.badImplementation(JSON.stringify(error));
    }
  }
}
