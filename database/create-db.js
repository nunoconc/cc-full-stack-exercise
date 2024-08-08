const companies = require('./data/data.json');
const pg = require('pg');

async function create () {
    const pool = new pg.Pool({
        database: 'security-db',
        user: 'postgres',
        password: 'postgres',
        port: 5432,
        ssl: false,
        max: 20,
        idleTimeoutMillis: 1000,
        connectionTimeoutMillis: 1000,
        maxUses: 7500,
    });
    try {
        console.log("Read from file all companies!");
      
        const connection = await pool.connect();
        console.log("Connected to database!");
      
        try {
          connection.query(
            "DROP TABLE IF EXISTS company;" +
              ' CREATE TABLE company (id serial, ticker varchar(50), "securityName" varchar(50), sector varchar(50), country varchar(50), trend numeric, prices jsonb);'
          );
          console.log("Created table company");
      
          console.log("Filling it with companies");
          const queryString =
            `INSERT INTO company (ticker, "securityName", sector, country, trend, prices) VALUES` +
            companies
              .map(
                (company) =>
                  ` ('${company.ticker}', '${company.securityName}', '${
                    company.sector
                  }', '${company.country}', '${company.trend}', '${JSON.stringify(
                    company.prices
                  )}')`
              )
              .join(",");
      
          const result = await connection.query(queryString);
          console.log(`Inserted ${result.rowCount} companies`);
        } finally {
          connection.release();
        }
      } catch (error) {
        console.log("Unable to complete data seed!");
        throw error;
      }
}

setTimeout(create, 5000);