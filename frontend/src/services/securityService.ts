import Axios from 'axios';
import { setupCache, buildWebStorage } from 'axios-cache-interceptor';
import { Company } from '../types/company';

export default class SecurityService {
    apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    pageSize = process.env.REACT_APP_PAGE_SIZE;
    axios = setupCache(Axios.create(), {
        storage: buildWebStorage(
            localStorage,
            process.env.REACT_APP_LOCAL_STORAGE_CACHE
        ),
    });

    async getCompany(symbol: string): Promise<Company> {
        return this.axios
            .get<Company>(`${this.apiEndpoint}/company/detail`, {
                params: {
                    symbol,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw error;
            });
    }

    async getCompanies(page: number): Promise<Company[]> {
        return this.axios
            .get<Company[]>(`${this.apiEndpoint}/company/list`, {
                params: {
                    pageSize: this.pageSize,
                    index: page,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw error;
            });
    }
}
