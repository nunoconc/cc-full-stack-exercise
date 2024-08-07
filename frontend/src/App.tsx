import React, { useMemo } from 'react';
import Router from './components/router';
import { Link, Typography } from '@mui/material';
import './index.css';
import { AppContextProvider } from './context/appContext';

function App() {
    const header = useMemo(
        () => (
            <header className="header">
                <Link href={'/'}>
                    <Typography variant="h1">Securities</Typography>
                </Link>
            </header>
        ),
        []
    );

    return (
        <AppContextProvider>
            <div>
                {header}
                <main>
                    <Router />
                </main>
            </div>
        </AppContextProvider>
    );
}

export default App;
