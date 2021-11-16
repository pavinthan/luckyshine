import Boom from '@hapi/boom';
import { TreasureService } from './service';
import type { Request, ResponseToolkit } from '@hapi/hapi';

export class TreasureController {
  public async index(request: Request, h: ResponseToolkit) {
    try {
      const result = await new TreasureService().getAll(request.query);
      return h.response(result).code(200);
    } catch (error) {
      return Boom.badImplementation(JSON.stringify(error));
    }
  }

  public async store(request: Request, h: ResponseToolkit) {
    try {
      const result = await new TreasureService().create(request.payload);
      return h.response(result).code(201);
    } catch (error) {
      return Boom.badImplementation(JSON.stringify(error));
    }
  }
}
