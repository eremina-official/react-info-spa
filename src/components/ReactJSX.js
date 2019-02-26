import React from 'react';

const ReactJSX = () => {
  return (
    <div>
      <h1>JSX</h1>
      <h2>This page describes JSX (JavaScript XML).</h2>
      <p><a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a> is a JavaScript syntax extention.</p>
      <p>JSX is used to describe how the UI should look like.</p>
      <p>JSX is compiled by <a href="https://babeljs.io/">Babel</a> to <code>React.createElement()</code> call that returns a React Element. </p>
      <p>Any valid JavaScript expression can be embedded inside the curly braces in JSX.</p>
    </div>
  );
};

export default ReactJSX;