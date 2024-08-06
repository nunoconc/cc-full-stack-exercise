import PostgresDatabase from "../database/postgresDatabase";
import { Company } from '../types/company';

export default class CompanyService {
    postgresDB = new PostgresDatabase();

    async getCompanies(pageSize: number, index: number): Promise<Company[]> {
        const results = await this.postgresDB.findCompanies(pageSize, index * pageSize);

        return results;
    }

    async getCompany(symbol: string): Promise<Company> {
        const result = await this.postgresDB.findCompany(symbol);

        return result;
    }

}