import PostgresDatabase from '../database/postgresDatabase';
import { Company } from '../models/company';

/**
 * Singleton service to call and get values from database pool instance
 *
 * @export
 * @class CompanyService
 * @typedef {CompanyService}
 */
export default class CompanyService {
    // Initialize database pool
    postgresDB = new PostgresDatabase();
    timeoutsCount = 0;

    /**
     * With the pageSize and index of the page retrieves the filtered companies list from database pool instance
     *
     * @async
     * @param {number} pageSize
     * @param {number} index
     * @returns {Promise<Company[]>}
     */
    async getCompanies(pageSize: number, index: number): Promise<Company[]> {
        try {
            // Gets companies
            const results = await this.postgresDB.findCompanies(
                pageSize,
                index * pageSize
            );
            return results;
        } catch (error) {
            // try to restart pool in case of error
            this.checkPoolTimeoutError(error as Error);
            throw error;
        }
    }

    /**
     * With the symbol gets the unique company from database pool instance
     *
     * @async
     * @param {string} symbol
     * @returns {Promise<Company>}
     */
    async getCompany(symbol: string): Promise<Company> {
        try {
            //Get company
            const result = await this.postgresDB.findCompany(symbol);

            return result;
        } catch (error) {
            // try to restart pool in case of error
            this.checkPoolTimeoutError(error as Error);
            throw error;
        }
    }

    /**
     * In case of an error will retry n times to restart database pool instance
     *
     * @private
     * @param {Error} error
     */
    private checkPoolTimeoutError(error: Error) {
        if (error?.stack) {
            const shouldRetry =
                this.timeoutsCount <
                parseInt(process.env.DATABASE_TIMEOUTS || '1');
            const isPoolError = /node_modules\/pg-pool/m.test(error.stack);

            if (shouldRetry && isPoolError) {
                this.postgresDB = new PostgresDatabase();
            }
        }
    }
}
