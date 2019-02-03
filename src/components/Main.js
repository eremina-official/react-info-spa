import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactHome from './ReactHome';
import ReactInfo from './ReactInfo';
import ReactComponents from './ReactComponents';
import ReactElements from './ReactElements';
import ReactJSX from './ReactJSX';
import CreateReactApp from './CreateReactApp';
import ES6Modules from './ES6Modules';
import Webpack from './Webpack';
import ReactRouter from './ReactRouter';
import NoMatch from './NoMatch';

const Main = () => {
  return (
    <div className="col-sm-8 pt-4">
      <Switch>
        <Route exact path="/" component={ReactHome} />
        <Route path="/react-info" component={ReactInfo} />
        <Route path="/react-components" component={ReactComponents} />
        <Route path="/react-elements" component={ReactElements} />
        <Route path="/react-jsx" component={ReactJSX} />
        <Route path="/create-react-app" component={CreateReactApp} />
        <Route path="/react-router" component={ReactRouter} />
        <Route path="/es6-modules" component={ES6Modules} />
        <Route path="/webpack" component={Webpack} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

export default Main;