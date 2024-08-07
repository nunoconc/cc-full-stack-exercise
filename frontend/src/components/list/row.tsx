import { JSX } from 'react';
import { Company } from '../../types/company';
import { useNavigate } from 'react-router-dom';
import { Typography, TableCell, TableRow } from '@mui/material';

interface IRow {
    company: Company;
}

export default function Row({ company }: IRow): JSX.Element {
    const navigate = useNavigate();
    const color =
        company.trend > 0.2 ? 'blue' : company.trend > -0.2 ? 'green' : 'red';

    return (
        <TableRow className='tableRow' onClick={() => navigate(`/securities/${company.ticker}`)}>
            <TableCell>{company.ticker}</TableCell>
            <TableCell>{company.securityName}</TableCell>
            <TableCell>{company.sector}</TableCell>
            <TableCell>{company.country}</TableCell>
            <TableCell className={`trendCell ${color}`}>
                <Typography color={'white'}>{company.trend}</Typography>
            </TableCell>
        </TableRow>
    );
}
