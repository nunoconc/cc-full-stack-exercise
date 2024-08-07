import React, { createContext } from 'react';
import Router from './components/router';
import { Link, Typography } from '@mui/material';
import './index.css';
import { AppContextProvider } from './context/appContext';

function App() {
    return (
        <AppContextProvider>
            <div>
                <header className="header">
                    <Link href={'/'}>
                        <Typography variant="h1">Securities</Typography>
                    </Link>
                </header>
                <main>
                    <Router />
                </main>
            </div>
        </AppContextProvider>
    );
}

export default App;
