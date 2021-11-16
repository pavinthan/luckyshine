import { UserService } from './service';

describe('UserService tests', () => {
  // Get an instance of the service
  const service: UserService = new UserService();

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
