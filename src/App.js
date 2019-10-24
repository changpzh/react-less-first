import React from 'react';
import logo from './logo.svg';
import app from './App.less';

function App() {
  return (
    <div className={app.App}>
      <header className={app.AppHeader}>
        <img src={logo} className={app.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
