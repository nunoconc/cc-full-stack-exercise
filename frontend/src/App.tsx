import React from 'react';

function App() {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <h1>{process.env.REACT_APP_MY_EXAMPLE}</h1>
      </main>
    </div>
  );
}

export default App;
