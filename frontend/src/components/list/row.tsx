import { JSX } from 'react';
import { Company } from '../../types/company';
import { useNavigate } from "react-router-dom";


interface IRow {
    company: Company;
}

export default function Row({ company }: IRow): JSX.Element {
    const navigate = useNavigate();

    return (
        <>
            <tr onClick={() => navigate(`/securities/${company.id}`)}>
                <th>{company.ticker}</th>
                <th>{company.securityName}</th>
                <th>{company.sector}</th>
                <th>{company.country}</th>
                <th>{company.trend}</th>
            </tr>
        </>
    );
}
