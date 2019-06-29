import React from 'react';
import logo from './logo.svg';
import Login from './Login/Login';
import CryptoPriceView from './CryptoPriceView/CryptoPriceView';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <CryptoPriceView />
    </div>
  );
}

export default App;
