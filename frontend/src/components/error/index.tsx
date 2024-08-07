import { JSX } from 'react';
import { Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';
import './index.css';


export default function Error(): JSX.Element {
    const error = useRouteError() as Error;
    
    return (
        <div className="errorContainer">
            <Typography variant="h4">
                <p>Ups! Some error has occurred while loading..</p>
            </Typography>
            <Typography variant="h6">
                <b>{error?.name}</b> - {error?.message}
            </Typography>
        </div>
    );
}
