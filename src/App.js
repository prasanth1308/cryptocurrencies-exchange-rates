import React, { useState, useEffect } from 'react';
import Login from './Login/Login';
import CryptoPriceView from './CryptoPriceView/CryptoPriceView';
import './App.css';

function App() {
  const isLogged = localStorage.getItem('isUserLoggedIn') || false;
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLogged);
  useEffect(() => {
    try {
      let isLogged = localStorage.getItem('isUserLoggedIn') || false;
      setIsUserLoggedIn(isLogged);
    } catch (error) {
      console.log('App-useEffect[]', error)
    }
  }, []);
  const setUserLogin = (event) => {
    try {
      setIsUserLoggedIn(true);
    } catch (error) {
      console.log('setUserLogin', error)
    }
  };
  const removeUserLogin = (event) => {
    try {
      setIsUserLoggedIn(false);
    } catch (error) {
      console.log('removeUserLogin', error)
    }
  };
  return (
    <div className="App">
      {!isUserLoggedIn && <Login setUserLogin={setUserLogin}/>
        || <CryptoPriceView removeUserLogin={removeUserLogin}/>}
    </div>
  );
}

export default App;
