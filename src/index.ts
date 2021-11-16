import { App } from './app';

const app = new App();

app.init().then(() => {
  app.start().then(() => {
    console.log(`Server is running at: ${app.info()?.uri}`);
  });
});

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});
