import React from 'react';

const Webpack = () => {
  return (
    <div>
      <h1>Webpack</h1>
      <h2>This page describes the main concepts of Webpack v4.</h2>
      <p><a href="https://webpack.js.org/">Webpack</a> is a JavaScript module bundler.</p>
      <p>Webpack transpiles the import/export statements so that the older browsers can also run it (<a href="https://webpack.js.org/guides/getting-started/#modules">link</a>).</p>
      <p>Webpack won't transpile any other ES6 features except for import/export statements. To transpile ES6 to ES5 with webpack use a webpack loader like Babel (<a href="https://webpack.js.org/guides/getting-started/#modules">link</a>).</p>
    </div>
  );
};

export default Webpack;