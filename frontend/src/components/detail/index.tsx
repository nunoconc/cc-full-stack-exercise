import { JSX, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Company } from '../../types/company';

export default function Detail(): JSX.Element {
    const { id } = useParams();
    const [company, setCompany] = useState<Company>();

    useEffect(() => {
        if (id) {
            setCompany({
                id: parseInt(id),
                ticker: '000063.SZ',
                securityName: 'ZTE Corporation',
                sector: 'Technology',
                country: 'China',
                trend: 0.82,
                prices: [],
            });
        }
    }, []);

    return (
        <div>
            <h2>
                {company?.ticker} - {company?.securityName}
            </h2>
            <p>Sectore: {company?.sector}</p>
            <p>Country: {company?.country}</p>
            
            <div>
                <p>..... Chart ....</p>
            </div>
        </div>
    );
}
