import { LoaderFunctionArgs } from 'react-router-dom';
import SecurityService from '../../services/securityService';

const listLoader = async (
    { request }: LoaderFunctionArgs,
    securityService: SecurityService
) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '0');

    const companies = await securityService.getCompanies(page);

    return companies;
};

const itemLoader = async (
    { params }: LoaderFunctionArgs,
    securityService: SecurityService
) => {
    if (params.symbol) {
        const company = await securityService.getCompany(params.symbol);

        return company;
    }
};

export { listLoader, itemLoader };
