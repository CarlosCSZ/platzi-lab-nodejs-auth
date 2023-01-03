import 'dotenv/config';
import { app } from './app';
import { connection as db } from './database';

db();

const port = process.env.port || 3000;

const server = app.listen(port, () =>
  console.log(`[server] Connected to port ${port}`)
);

process.on('unhandledRejection', (err: any) => {
  console.error(`[server] An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
