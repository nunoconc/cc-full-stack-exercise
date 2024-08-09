import { JSX, useEffect, useState, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Company } from '../../types/company';
import { buildOptions } from './highchartOptions';
import { Typography } from '@mui/material';

/**
 * Detail component to show company details
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Detail(): JSX.Element {
    const [company, setCompany] = useState<Company>();
    // Reference to chart to optimize renders
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
    // Loads data from router loader
    const data = useLoaderData() as Company;

    // Update company according to loader data change
    useEffect(() => {
        setCompany(data);
    }, [data]);

    return (
        <div className="detailContainer">
            <Typography variant="h4" data-testid="detail-name">
                <p>
                    {company?.ticker} - {company?.securityName}
                </p>
            </Typography>
            <Typography variant="h6" data-testid="detail-sector">
                <b>Sector:</b> {company?.sector}
            </Typography>
            <Typography variant="h6" data-testid="detail-country">
                <b>Country: </b>
                {company?.country}
            </Typography>
            {company?.prices && (
                <div data-testid="detail-chart">
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
