import React from 'react';
import Router from './components/router';

function App() {
  return (
    <div>
      <header>
        <h1>{process.env.REACT_APP_MY_EXAMPLE}</h1>
      </header>
      <main>
        <Router />
      </main>
    </div>
  );
}

export default App;
