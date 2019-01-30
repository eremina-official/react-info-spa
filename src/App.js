import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReactHome from './components/ReactHome';
import ReactInfo from './components/ReactInfo';
import ReactComponents from './components/ReactComponents';
import ReactElements from './components/ReactElements';
import ReactJSX from './components/ReactJSX';
import CreateReactApp from './components/CreateReactApp';
import ES6Modules from './components/ES6Modules';
import Webpack from './components/Webpack';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={ReactHome} />
          <Route path="/react-info" component={ReactInfo} />
          <Route path="/react-components" component={ReactComponents} />
          <Route path="/react-elements" component={ReactElements} />
          <Route path="/react-jsx" component={ReactJSX} />
          <Route path="/create-react-app" component={CreateReactApp} />
          <Route path="/es6-modules" component={ES6Modules} />
          <Route path="/webpack" component={Webpack} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
