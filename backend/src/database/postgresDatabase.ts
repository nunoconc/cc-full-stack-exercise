import { Pool } from 'pg';
import { Company } from '../models/company';

/**
 * Singleton database pool connection to postgres
 *
 * @export
 * @class PostgresDatabase
 * @typedef {PostgresDatabase}
 */
export default class PostgresDatabase {
    // create database pool
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

    /**
     * Finds all companies in the database from the offset with size limit
     *
     * @async
     * @param {number} limit
     * @param {number} offset
     * @returns {Promise<Company[]>}
     */
    async findCompanies(limit: number, offset: number): Promise<Company[]> {
        try {
            // established connection to the pool
            const connection = await this.pool.connect();

            try {
                // execute query to get all companies from offset with size limit
                const result = await connection.query(`
                SELECT * FROM company
                LIMIT ${limit}
                OFFSET ${offset};
            `);

                return result.rows;
            } finally {
                // always close connection
                connection.release();
            }
        } catch (error) {
            console.log('Unable to find companies');
            throw error;
        }
    }

    /**
     * Finds company in the database with the unique ticker/symbol
     *
     * @async
     * @param {string} symbol
     * @returns {Promise<Company>}
     */
    async findCompany(symbol: string): Promise<Company> {
        try {
            // established connection to the pool
            const connection = await this.pool.connect();

            try {
                // execute query to get company by ticker/symbol
                const result = await connection.query(`
                    SELECT * FROM company
                    WHERE ticker = ('${symbol}');
                `);

                return result.rows[0];
            } finally {
                // always close connection
                connection.release();
            }
        } catch (error) {
            console.log('Unable to find companies');
            throw error;
        }
    }
}
