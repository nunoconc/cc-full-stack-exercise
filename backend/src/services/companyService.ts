import PostgresDatabase from '../database/postgresDatabase';
import { Company } from '../models/company';

export default class CompanyService {
    postgresDB = new PostgresDatabase();
    timeoutsCount = 0;

    async getCompanies(pageSize: number, index: number): Promise<Company[]> {
        try {
            const results = await this.postgresDB.findCompanies(
                pageSize,
                index * pageSize
            );
            return results;
        } catch (error) {
            this.checkPoolTimeoutError(error as Error);
            throw error;
        }
    }

    async getCompany(symbol: string): Promise<Company> {
        try {
            const result = await this.postgresDB.findCompany(symbol);

            return result;
        } catch (error) {
            this.checkPoolTimeoutError(error as Error);
            throw error;
        }
    }

    private checkPoolTimeoutError(error: Error) {
        if (error?.stack) {
            const shouldRetry =
                this.timeoutsCount <
                parseInt(process.env.TIMEOUTS_COUNT || '1');
            const isPoolError = /node_modules\/pg-pool/m.test(error.stack);

            if (shouldRetry && isPoolError) {
                this.postgresDB = new PostgresDatabase();
            }
        }
    }
}
