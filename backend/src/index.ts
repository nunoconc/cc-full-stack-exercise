// server.mjs
import { createServer } from 'node:http';
import PostGres from './database/postgres';

const server = createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
    const pg = new PostGres();
    /*const comps =  await pg.findCompanies(5,10);
    if(comps) {
      console.log(comps);
    }*/

    const comp = await pg.findCompany(2);
    if(comp) {
        console.log(comp);
    }

});

// starts a simple http server locally on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Listening on localhost:3000');
    const pg = new PostGres();
    pg.init();
});

// run with `node server.mjs`
