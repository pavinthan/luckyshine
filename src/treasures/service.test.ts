import { TreasureService } from './service';

describe('TreasureService tests', () => {
  // Get an instance of the service
  const service: TreasureService = new TreasureService();

  // Only these simple tests here just as example, since no much business logic except CRUD
  test('#create() function should be defined', () => {
    expect(service.create).toBeDefined();
  });

  test('#getAll() function should be defined', () => {
    expect(service.getAll).toBeDefined();
  });

  test('#updateById() function should be defined', () => {
    expect(service.updateById).toBeDefined();
  });

  test('#updateOrCreate() function should be defined', () => {
    expect(service.updateOrCreate).toBeDefined();
  });
});
