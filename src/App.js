import React from 'react';
import { BrowserRouter, Router, Switch, Route, Redirect } from 'react-router-dom';
import auth from './Auth';
import Routes from './Routes';

import './App.css';


function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
