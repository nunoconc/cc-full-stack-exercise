import { JSX, useState, useEffect, useMemo } from 'react';
import Row from './row';
import { Company } from '../../types/company';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import Nave from './nave';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import './index.css';

const tableHeaders = ['Symbol', 'Name', 'Sector', 'Country', 'Trend'];

export default function List(): JSX.Element {
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '0');
    const [companies, setCompanies] = useState<Company[]>([]);
    const data = useLoaderData() as Company[];

    useEffect(() => {
        setCompanies(data);
    }, [page, data]);

    const tableHead = useMemo(
        () => (
            <TableRow>
                {tableHeaders.map((header) => (
                    <TableCell key={header}>
                        <Typography variant="h5">{header}</Typography>
                    </TableCell>
                ))}
            </TableRow>
        ),
        []
    );

    return (
        <div className="listContainer">
            <Table>
                <TableHead>{tableHead}</TableHead>
                <TableBody className="tableBody">
                    {companies.map((company) => (
                        <Row key={company.ticker} company={company} />
                    ))}
                </TableBody>
            </Table>
            <Nave page={page} />
        </div>
    );
}
