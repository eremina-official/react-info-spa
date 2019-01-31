import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
