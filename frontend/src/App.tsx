import React from 'react';
import Router from './components/router';

function App() {
  return (
    <div>
      <header>
        <h1 onClick={()=> window.location.href = '/'}>{process.env.REACT_APP_TITLE}</h1>
      </header>
      <main>
        <Router />
      </main>
    </div>
  );
}

export default App;
