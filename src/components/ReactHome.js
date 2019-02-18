import React from 'react';

const ReactHome = () => {
  return (
    <div>
      <h1>Introduction</h1>
      <h2>The page provides a brief summary of the React v16 main concepts as well as an overview of selected technologies which are used with React.</h2>
      <ul>
        <li>React</li>
        <li>React componets</li>
        <li>React elements</li>
        <li>JSX</li>
        <li>Change detection in React</li>
        <li>Handling Events in React</li>
        <li>Create React App</li>
        <li>React Router</li>
        <li>ES6 modules</li>
        <li>Webpack</li>
      </ul>

      <p className="font-weight-bold mb-0 pt-3">Bibliography</p>
      <p className="font-weight-light mb-1">Following resources were used for writing the articles:</p>
      <ul className="list-unstyled">
        <li><a href="https://reactjs.org/docs/getting-started.html">React Docs</a></li>
        <li><a href="https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html">React Components, Elements, and Instances</a> - React Blog</li>
        <li><a href="https://blog.angularindepth.com/what-every-front-end-developer-should-know-about-change-detection-in-angular-and-react-508f83f58c6a">What every front-end developer should know about change detection in Angular and React</a> - Change Detection</li>
        <li><a href="https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/">The difference between Virtual DOM and DOM</a> - Change Detection</li>
        <li><a href="https://github.com/facebook/create-react-app">Create React App Docs</a></li>
        <li><a href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router/docs/api">React Router Docs</a></li>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">import</a> - ES6 Modules (MDN)</li>
        <li><a href="http://exploringjs.com/es6/ch_modules.html">Exploring JS: Modules</a> - ES6 Modules</li>
        <li><a href="https://webpack.js.org/concepts">Webpack Docs</a></li>
      </ul>
    </div>
  );
};

export default ReactHome;