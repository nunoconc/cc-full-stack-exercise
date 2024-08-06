import { LoaderFunction } from 'react-router-dom';
import { getCompanies, getCompany } from '../../services/securityService';


const listLoader = (async ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '0');

    const companies = await getCompanies(page);

    return companies;

}) as LoaderFunction;

const itemLoader = (async ({ params }) => {
    const id = parseInt(params.id || '0');

    const company = await getCompany(id);

    return company;

}) as LoaderFunction;


export {
    listLoader,
    itemLoader,
};