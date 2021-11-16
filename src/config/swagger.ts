import type { RegisterOptions } from 'hapi-swagger';

export const swaggerOptions: RegisterOptions = {
  info: {
    title: 'LuckyShine',
    version: '1.0.0',
    description:
      'LuckyShine is a game where users can collect treasures in a given latitude and longitude. Every  treasure that is collected will have points based on the monetary value. A treasure may have more than one money value, it depends on the user’s luck. Lucky users may get the highest money from the treasure that has been collected.',
  },
};
