// server.mjs
import { createServer } from 'node:http';
import PostGres from './database/postgres';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Listening on localhost:3000');
  const pg = new PostGres();
  pg.init();
});

// run with `node server.mjs`
