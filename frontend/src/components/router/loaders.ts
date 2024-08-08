import { LoaderFunctionArgs } from 'react-router-dom';
import SecurityService from '../../services/securityService';

// defines loader function to retrive data for the list component
const listLoader = async (
    { request }: LoaderFunctionArgs,
    securityService: SecurityService
) => {
    // handles query string
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '0');

    // request data
    const companies = await securityService.getCompanies(page);

    return companies;
};

// defines loader function to retrive data for the detail component
const itemLoader = async (
    { params }: LoaderFunctionArgs,
    securityService: SecurityService
) => {
    // handles parameteres
    if (params.symbol) {
        // request data
        const company = await securityService.getCompany(params.symbol);

        return company;
    }
};

export { listLoader, itemLoader };
