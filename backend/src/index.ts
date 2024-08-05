// server.mjs
import { createServer } from 'node:http';
import PostGresDatabase from './database/postgresDatabase';
import { CompanyService } from './services/companyService';

const server = createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');

    const service = new CompanyService();
    const comps = await service.getCompanies(5, 2);
    console.log(comps);
});

// starts a simple http server locally on port 3000
server.listen(3000, 'localhost', () => {
    console.log('Listening on localhost:3000');
    const pg = new PostGresDatabase();
    pg.init();
});

// run with `node server.mjs`
