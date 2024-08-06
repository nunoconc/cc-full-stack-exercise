import { JSX, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Company } from '../../types/company';
import { getCompany } from '../../services/securityService';

export default function Detail(): JSX.Element {
    const { id } = useParams();
    const [company, setCompany] = useState<Company>();

    useEffect(() => {
        if (id) {
            getCompany(parseInt(id)).then((comp) => {
                setCompany(comp);
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
                <p>{company?.prices?.[0].volume}</p>
            </div>
        </div>
    );
}
