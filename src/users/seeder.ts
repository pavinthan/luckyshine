import { UserService } from './service';

const users = [
  {
    age: 21,
    id: 3000,
    name: 'U1',
    email: 'u1@luckyshine.xyz',
    password: 'luckyshine001',
  },
  {
    age: 51,
    id: 3001,
    name: 'U2',
    email: 'u2@luckyshine.xyz',
    password: 'luckyshine002',
  },
  {
    age: 31,
    id: 3002,
    name: 'U3',
    email: 'u3@luckyshine.xyz',
    password: 'luckyshine003',
  },
  {
    age: 18,
    id: 3003,
    name: 'U4',
    email: 'u4@luckyshine.xyz',
    password: 'luckyshine004',
  },
  {
    age: 21,
    id: 3004,
    name: 'U5',
    email: 'u5@luckyshine.xyz',
    password: 'luckyshine005',
  },
  {
    age: 35,
    id: 3005,
    name: 'U6',
    email: 'u6@luckyshine.xyz',
    password: 'luckyshine006',
  },
];

function usersSeeder() {
  return Promise.all(
    users.map(async (value) => {
      const service = new UserService();
      await service.updateOrCreate(value.id, value);
    })
  );
}

export default usersSeeder;
