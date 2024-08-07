import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import { Company } from '../types/company';

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
const pageSize = process.env.REACT_APP_PAGE_SIZE;

const instance = Axios.create(); 
const axios = setupCache(instance);

export async function getCompanies(page: number): Promise<Company[]> {
    return axios.get<Company[]>(`${apiEndpoint}/company/list`, {
        params: {
            pageSize,
            index: page,
        },
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then( (response) => {
        return response.data;
    })
    .catch( (error) => {
       throw error;
    });
}

export async function getCompany(symbol: string): Promise<Company> {
    return axios.get<Company>(`${apiEndpoint}/company/detail`, {
        params: {
            symbol,
        },
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then( (response) => {
        return response.data;
    })
    .catch( (error) => {
        throw error;
    });
}