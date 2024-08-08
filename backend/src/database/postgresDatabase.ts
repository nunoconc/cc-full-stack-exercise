import { Pool } from 'pg';
import { Company } from '../models/company';

export default class PostgresDatabase {
    pool = new Pool({
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PWD,
        port: parseInt(process.env.DATABASE_PORT || '5432'),
        ssl: false,
        max: 20,
        idleTimeoutMillis: 1000,
        connectionTimeoutMillis: 1000,
        maxUses: 7500,
    });

    async findCompanies(limit: number, offset: number): Promise<Company[]> {
        try {
            const connection = await this.pool.connect();

            try {
                const result = await connection.query(`
                SELECT * FROM company
                LIMIT ${limit}
                OFFSET ${offset};
            `);

                return result.rows;
            } finally {
                connection.release();
            }
        } catch (error) {
            console.log('Unable to find companies');
            throw error;
        }
    }

    async findCompany(symbol: string): Promise<Company> {
        try {
            const connection = await this.pool.connect();

            try {
                const result = await connection.query(`
                    SELECT * FROM company
                    WHERE ticker = ('${symbol}');
                `);

                return result.rows[0];
            } finally {
                connection.release();
            }
        } catch (error) {
            console.log('Unable to find companies');
            throw error;
        }
    }
}
