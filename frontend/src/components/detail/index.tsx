import { JSX, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Company } from '../../types/company';

export default function Detail(): JSX.Element {
    const [company, setCompany] = useState<Company>();
    const data = useLoaderData() as Company;

    useEffect(() => {
        setCompany(data);
    }, [data]);

    return (
        <div>
            <h2>
                {company?.ticker} - {company?.securityName}
            </h2>
            <p>Sectore: {company?.sector}</p>
            <p>Country: {company?.country}</p>

            <div>
                <p>..... Chart ....</p>
                <p>{company?.prices?.[0].volume}</p>
            </div>
        </div>
    );
}
