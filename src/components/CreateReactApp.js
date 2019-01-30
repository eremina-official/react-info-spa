import React from 'react';

const CreateReactApp = () => {
  return (
    <div>
      <h1>Create React App</h1>
      <p>Create React App is an officially supported way to create React applications.</p>
      <p>CRA offers a project setup that needs no configuration.</p>
      <p>CRA uses project build tools (such as Webpack, Babel, ESLint) which are preconfigured by default.</p>
      <p>The project setup supports ES6 modules.</p>
      <p>For the project to build two files are mandatory: public/index.html (the page template) and src/index.js (JavaScript entry point).</p>
      <p>Only files inside the src directory are processed by Webpack, therefore all JS and CSS files must be placed there.</p>
      <p>Only files from public and src directories are included in the production build. It is allowed to create more top-level directories which can be used for documentation etc.</p>
    </div>
  );
};

export default CreateReactApp;