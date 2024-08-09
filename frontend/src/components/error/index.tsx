import { JSX } from 'react';
import { Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';

/**
 * Error component to show global error message
 *
 *
 * @export
 * @returns {JSX.Element}
 */
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
