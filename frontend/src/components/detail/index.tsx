import { JSX, useEffect, useState, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Company, PriceEnum } from '../../types/company';
import { buildOptions } from './highchartOptions';

export default function Detail(): JSX.Element {
    const [company, setCompany] = useState<Company>();
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
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

            {company && (
                <div>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={buildOptions(company)}
                        ref={chartComponentRef}
                    />
                </div>
            )}
        </div>
    );
}
