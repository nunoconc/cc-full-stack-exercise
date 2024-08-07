import React from 'react';
import Router from './components/router';
import { Link, Typography } from '@mui/material';
import './index.css';


function App() {
  return (
    <div>
      <header className='header'>
        <Link href={"/"}>
          <Typography variant="h1">Securities</Typography>
        </Link>
      </header>
      <main>
        <Router />
      </main>
    </div>
  );
}

export default App;
