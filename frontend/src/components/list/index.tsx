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

// Set table headers
const tableHeaders = ['Symbol', 'Name', 'Sector', 'Country', 'Trend'];

/**
 * List component to show tabel of companies
 *
 * @export
 * @returns {JSX.Element}
 */
export default function List(): JSX.Element {
    const [companies, setCompanies] = useState<Company[]>([]);
    // Checks changes on page to send to navigation component
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '0');
    // Gets data from route loader
    const data = useLoaderData() as Company[];

    // Update companies according to loader data changes
    useEffect(() => {
        setCompanies(data);
    }, [page, data]);

    // Map headers and memo to reuse them since they are static
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
                    {
                        //Maps companies into row components
                        companies.map((company) => (
                            <Row key={company.ticker} company={company} />
                        ))
                    }
                </TableBody>
            </Table>
            <Nave page={page} />
        </div>
    );
}
