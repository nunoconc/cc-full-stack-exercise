import Axios from 'axios';
import { setupCache, buildWebStorage } from 'axios-cache-interceptor';
import { Company } from '../types/company';

/**
 * Singleton instance of security service to connect to the backend and access the data
 * Using axios to perform the requests
 *
 * @export
 * @class SecurityService
 * @typedef {SecurityService}
 */
export default class SecurityService {
    // Loads configurations from .env variables to be secret
    apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
    pageSize = process.env.REACT_APP_PAGE_SIZE;

    // Axios instance initialization with cache that will persist in the browser local storage
    // Page refresh's will maintain the cache
    axios = setupCache(Axios.create(), {
        storage: buildWebStorage(
            localStorage,
            process.env.REACT_APP_LOCAL_STORAGE_CACHE
        ),
    });

    /**
     * Retrieves company data
     *
     * @async
     * @param {string} symbol
     * @returns {Promise<Company>}
     */
    async getCompany(symbol: string): Promise<Company> {
        return (
            this.axios
                // call company/detail endpoint from backend
                .get<Company>(`${this.apiEndpoint}/company/detail/${symbol}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    throw error;
                })
        );
    }

    /**
     * Retrieves company list data
     *
     * @async
     * @param {number} page
     * @returns {Promise<Company[]>}
     */
    async getCompanies(page: number): Promise<Company[]> {
        return (
            this.axios
                // call company/list endpoint from backend
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
                })
        );
    }
}
