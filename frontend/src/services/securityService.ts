import axios from 'axios';
import { Company } from '../types/company';

const apiEndpoint = 'http://localhost:3001';
const pageSize = 10;

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
        console.error(error);
        return [];
    });
}
