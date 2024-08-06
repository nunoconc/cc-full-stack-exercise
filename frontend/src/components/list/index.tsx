import { JSX, useState, useEffect } from 'react';
import Row from './row';
import { Company } from '../../types/company';

export default function Item(): JSX.Element {
    const [companies, setCompanies] = useState<Company[]>([]);

    useEffect(() => {
        setCompanies([{
            id: 1,
            ticker: '000063.SZ',
            securityName: 'ZTE Corporation',
            sector: 'Technology',
            country: 'China',
            trend: 0.82,
            prices: [],
        },
        {
            id: 2,
            ticker: '601800.SS',
            securityName: 'China Communications Construction',
            sector: 'Industrials',
            country: 'China',
            trend: -0.53,
            prices: [],
        }]);
    }, []);
    
    return (
        <>
            <table>
                <tr>
                    <th>Symbol</th>
                    <th>Name</th>
                    <th>Sector</th>
                    <th>Country</th>
                    <th>Trend</th>
                </tr>
                {companies.map( (company) => <Row company={company} />)}
            </table>
        </>
    );
}