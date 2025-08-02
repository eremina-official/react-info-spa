import React from 'react';
import { Routes, Route } from 'react-router';
import ReactHome from './ReactHome';
import ReactInfo from './ReactInfo';
import ReactComponents from './ReactComponents';
import ReactElements from './ReactElements';
import ReactJSX from './ReactJSX';
import HandlingEvents from './HandlingEvents';
import ChangeDetectionInReact from './ChangeDetectionInReact';
import CreateReactApp from './CreateReactApp';
import ES6Modules from './ES6Modules';
import Webpack from './Webpack';
import ReactRouter from './ReactRouter';
import NoMatch from './NoMatch';

const Main = () => {
  return (
    <div className='pt-4'>
      <Routes>
        <Route path='/' element={<ReactHome />} />
        <Route path='/react-info' element={<ReactInfo />} />
        <Route path='/react-components' element={<ReactComponents />} />
        <Route path='/react-elements' element={<ReactElements />} />
        <Route path='/react-jsx' element={<ReactJSX />} />
        <Route path='/handling-events-in-react' element={<HandlingEvents />} />
        <Route
          path='/change-detection-in-react'
          element={<ChangeDetectionInReact />}
        />
        <Route path='/create-react-app' element={<CreateReactApp />} />
        <Route path='/react-router' element={<ReactRouter />} />
        <Route path='/es6-modules' element={<ES6Modules />} />
        <Route path='/webpack' element={<Webpack />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>

      <p className='font-italic font-weight-bold pt-4 pb-2'>
        View code on{' '}
        <a href='https://github.com/eremina-official/react-info-spa'>Github</a>
      </p>
    </div>
  );
};

export default Main;
