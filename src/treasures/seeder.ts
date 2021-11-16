import { TreasureService } from './service';

const treasures = [
  {
    id: 100,
    name: 'T1',
    coordinate: 'POINT(1.33125924 103.8980486)',
  },
  {
    id: 101,
    name: 'T2',
    coordinate: 'POINT(1.32255754 103.8943086)',
  },
  {
    id: 102,
    name: 'T3',
    coordinate: 'POINT(1.3166356 103.8891225)',
  },
  {
    id: 103,
    name: 'T4',
    coordinate: 'POINT(1.31286055 103.8545565)',
  },
  {
    id: 104,
    name: 'T5',
    coordinate: 'POINT(1.34439896 103.8765938)',
  },
  {
    id: 105,
    name: 'T6',
    coordinate: 'POINT(1.33616189 103.8770866)',
  },
  {
    id: 106,
    name: 'T7',
    coordinate: 'POINT(1.32552844 103.8691014)',
  },
  {
    id: 107,
    name: 'T8',
    coordinate: 'POINT(1.32303589 103.8774815)',
  },
  {
    id: 108,
    name: 'T9',
    coordinate: 'POINT(1.33465304 103.870449)',
  },
  {
    id: 109,
    name: 'T10',
    coordinate: 'POINT(1.32606138 103.8793007)',
  },
  {
    id: 110,
    name: 'T11',
    coordinate: 'POINT(1.25886946 103.898879)',
  },
  {
    id: 111,
    name: 'T12',
    coordinate: 'POINT(1.26973345 103.8810448)',
  },
  {
    id: 112,
    name: 'T13',
    coordinate: 'POINT(1.32914713 103.8334781)',
  },
  {
    id: 113,
    name: 'T14',
    coordinate: 'POINT(1.32960595 103.8807937)',
  },
  {
    id: 114,
    name: 'T15',
    coordinate: 'POINT(1.33700251 103.8492249)',
  },
  {
    id: 115,
    name: 'T16',
    coordinate: 'POINT(1.27845714 103.8571762)',
  },
  {
    id: 116,
    name: 'T17',
    coordinate: 'POINT(1.36019784 103.8563582)',
  },
  {
    id: 117,
    name: 'T18',
    coordinate: 'POINT(1.31551921 103.8632839)',
  },
];

function treasuresSeeder() {
  return Promise.all(
    treasures.map(async (value) => {
      const service = new TreasureService();
      await service.updateOrCreate(value.id, value);
    })
  );
}

export default treasuresSeeder;
