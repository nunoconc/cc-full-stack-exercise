import { JSX } from 'react';
import { Company } from '../../types/company';

interface IRow {
    company: Company;
}

export default function Row({ company }: IRow): JSX.Element {

    return (
        <>
            <tr>
                <th>{company.ticker}</th>
                <th>{company.securityName}</th>
                <th>{company.sector}</th>
                <th>{company.country}</th>
                <th>{company.trend}</th>
            </tr>
        </>
    );
}
