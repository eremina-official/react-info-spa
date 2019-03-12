import React from 'react';

const CreateReactApp = () => {
  return (
    <div>
      <h1>Create React App</h1>
      <h2>Intro to Create React App.</h2>
      <p><a href="https://github.com/facebook/create-react-app">Create React App</a> is an officially supported CLI tool for creating React applications.</p>
      <p>CRA offers a project setup and provides project build tools (such as Webpack, Babel, ESLint) which are preconfigured by default.</p>
      <p>The project setup supports ES6 modules.</p>
      <p>For the project to build two files are mandatory: <code>public/index.html</code> (the page template) and <code>src/index.js</code> (JavaScript entry point).</p>
      <p>Only files inside the <code>src</code> directory are processed by Webpack, therefore all JS and CSS files must be placed there.</p>
      <p>Only files from <code>public</code> and <code>src</code> directories are included in the production build. It is allowed to create more top-level directories which can be used for documentation etc.</p>
    </div>
  );
};

export default CreateReactApp;