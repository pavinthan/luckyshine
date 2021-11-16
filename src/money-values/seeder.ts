import { MoneyValuesService } from './service';

const moneyValues = [
  {
    id: 1,
    treasure_id: 100,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 101,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 102,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 103,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 104,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 105,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 106,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 107,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 108,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 109,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 110,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 111,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 112,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 113,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 114,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 115,
    amount: 15,
  },
  {
    id: 1,
    treasure_id: 116,
    amount: 10,
  },
  {
    id: 1,
    treasure_id: 117,
    amount: 15,
  },
];

function moneyValuesSeeder() {
  return Promise.all(
    moneyValues.map(async (value) => {
      const service = new MoneyValuesService();
      await service.updateOrCreate(value.id, value);
    })
  );
}

export default moneyValuesSeeder;
