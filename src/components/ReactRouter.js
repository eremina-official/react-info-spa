import React from 'react';

const ReactRouter = () => {
  return (
    <div>
      <h1>React Router</h1>
      <h2>This page provides an overview of React Router v4 features.</h2>
      <p><a href="https://github.com/ReactTraining/react-router">React Router</a> is a library for routing in React Applications.</p>
      <p>React Router composes routes in a declarative way.</p>
      <p>In its core React Router 4 is an API that is composed of React Components.</p>
      <p>The main React Router components are <code>BrowserRouter</code>, <code>Link</code> and <code>Route</code>.</p>
      <p><code>BrowserRouter</code> component wraps all the <code>Route</code> components.</p>
      <p>Like all React components <code>BrowserRouter</code> expects to receive a single child element.</p>
      <p><code>Link</code> component is used to generate links to the parts of dynamic content.</p>
      <p><code>Link</code> component renders a usual HTML anchor tag.</p>
      <p>When the <code>Link</code> is used for navigation it does not make a full page refresh but tries to update the associated part of UI.</p>
      <p>Main props passed to <code>Route</code> are <code>path</code> (any valid URL path) and a <a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#route-render-methods">render method</a> (there are three render methods: <code>component</code>, <code>render</code> and <code>children</code>).</p>
      <p><code>Route</code> component renders some UI with a render method passed as the props if the current URL matches <code>Route</code>'s props path.</p>
      <p><code>Route</code> component passes to its render methods three props: <code>match</code>, <code>location</code> and <code>history</code> (<a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#route-props">link</a>).</p>
      <p><code>Route</code> component inline rendering with render prop</p>
      <p>Dynamic routing with <code>match</code></p>
    </div>
  );
};

export default ReactRouter;