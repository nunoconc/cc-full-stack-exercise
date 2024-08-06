import { JSX, useState, useEffect } from 'react';
import Row from './row';
import { Company } from '../../types/company';
import { getCompanies } from '../../services/securityService';
import { useSearchParams } from 'react-router-dom';
import Nave from './nave';

export default function List(): JSX.Element {
    const [ searchParams ] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '0');
    const [companies, setCompanies] = useState<Company[]>([]);

    useEffect(() => {
        getCompanies(page).then((comps) => {
            setCompanies(comps);
        });
    }, [page]);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Sector</th>
                        <th>Country</th>
                        <th>Trend</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <Row key={company.id} company={company} />
                    ))}
                </tbody>
            </table>
            <Nave page={page} hideNext={false} />
        </>
    );
}
