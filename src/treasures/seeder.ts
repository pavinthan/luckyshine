import { TreasureService } from './service';

const treasures = [
  {
    id: 100,
    name: 'T1',
    latitude: 1.33125924,
    longitude: 103.8980486,
  },
  {
    id: 101,
    name: 'T2',
    latitude: 1.32255754,
    longitude: 103.8943086,
  },
  {
    id: 102,
    name: 'T3',
    latitude: 1.3166356,
    longitude: 103.8891225,
  },
  {
    id: 103,
    name: 'T4',
    latitude: 1.31286055,
    longitude: 103.8545565,
  },
  {
    id: 104,
    name: 'T5',
    latitude: 1.34439896,
    longitude: 103.8765938,
  },
  {
    id: 105,
    name: 'T6',
    latitude: 1.33616189,
    longitude: 103.8770866,
  },
  {
    id: 106,
    name: 'T7',
    latitude: 1.32552844,
    longitude: 103.8691014,
  },
  {
    id: 107,
    name: 'T8',
    latitude: 1.32303589,
    longitude: 103.8774815,
  },
  {
    id: 108,
    name: 'T9',
    latitude: 1.33465304,
    longitude: 103.870449,
  },
  {
    id: 109,
    name: 'T10',
    latitude: 1.32606138,
    longitude: 103.8793007,
  },
  {
    id: 110,
    name: 'T11',
    latitude: 1.25886946,
    longitude: 103.898879,
  },
  {
    id: 111,
    name: 'T12',
    latitude: 1.26973345,
    longitude: 103.8810448,
  },
  {
    id: 112,
    name: 'T13',
    latitude: 1.32914713,
    longitude: 103.8334781,
  },
  {
    id: 113,
    name: 'T14',
    latitude: 1.32960595,
    longitude: 103.8807937,
  },
  {
    id: 114,
    name: 'T15',
    latitude: 1.33700251,
    longitude: 103.8492249,
  },
  {
    id: 115,
    name: 'T16',
    latitude: 1.27845714,
    longitude: 103.8571762,
  },
  {
    id: 116,
    name: 'T17',
    latitude: 1.36019784,
    longitude: 103.8563582,
  },
  {
    id: 117,
    name: 'T18',
    latitude: 1.31551921,
    longitude: 103.8632839,
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
