import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Header name={'JaCk'}/>
      <div className="App-header">
        <p>
          Edit and lets code.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
