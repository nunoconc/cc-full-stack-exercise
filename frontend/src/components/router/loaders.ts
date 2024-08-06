import { LoaderFunction } from 'react-router-dom';
import { getCompanies, getCompany } from '../../services/securityService';

const listLoader = (async ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '0');

    const companies = await getCompanies(page);

    return companies;

}) as LoaderFunction;

const itemLoader = (async ({ params }) => {
    if (params.symbol) {
        const company = await getCompany(params.symbol);

        return company;

    }

}) as LoaderFunction;


export {
    listLoader,
    itemLoader,
};