import { Pool } from 'pg';
import { Company } from '../models/company';
import data from '../data/data.json';

export default class PostgresDatabase {
    pool = new Pool({
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

    async init() {
        try {
            const companies = data as Company[];
            console.log("Read from file all companies!");

            const connection = await this.pool.connect();
            console.log("Connected to database!");


            connection.query('DROP TABLE IF EXISTS company;' + ' CREATE TABLE company (id serial, ticker varchar(50), "securityName" varchar(50), sector varchar(50), country varchar(50), trend numeric, prices jsonb);');
            console.log('Created table company');


            console.log('Filling it with companies');
            const queryString = `INSERT INTO company (ticker, "securityName", sector, country, trend, prices) VALUES` +
                companies.map((company: Company) => ` ('${company.ticker}', '${company.securityName}', '${company.sector}', '${company.country}', '${company.trend}', '${JSON.stringify(company.prices)}')`).join(',');

            const result = await connection.query(queryString);
            console.log(`Inserted ${result.rowCount} companies`);

        } catch (error) {
            console.log('Unable to complete data seed!')
            throw error;
        }
    }

    async findCompanies(limit: number, offset: number): Promise<Company[]> {
        try {
            const connection = await this.pool.connect();

            const result = await connection.query(`
                SELECT * FROM company
                LIMIT ${limit}
                OFFSET ${offset};
            `);

            return result.rows;
        } catch (error) {
            console.log('Unable to find companies')
            throw error;
        }
    }

    async findCompany(symbol: string): Promise<Company> {
        try {
            const connection = await this.pool.connect();

            const result = await connection.query(`
                SELECT * FROM company
                WHERE ticker = ('${symbol}');
            `);

            return result.rows[0];
        } catch (error) {
            console.log('Unable to find companies')
            throw error;
        }
    }
}