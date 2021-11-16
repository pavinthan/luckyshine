import { moneyValuesSeeder } from './money-values';
import { treasuresSeeder } from './treasures';
import { usersSeeder } from './users';

function main() {
  return Promise.all([usersSeeder(), treasuresSeeder(), moneyValuesSeeder()]);
}

main().catch((e: Error) => {
  console.error(e);
  process.exit(1);
});
