import React from 'react';

const ReactJSX = () => {
  return (
    <div>
      <h1>JSX</h1>
      <p className='fw-light fs-5'>This page describes JSX (JavaScript XML).</p>
      <p>
        <a href='https://reactjs.org/docs/introducing-jsx.html'>JSX</a> is a
        JavaScript syntax extention.
      </p>
      <p>
        Basically JSX is a way of writing HTML-like code inside JavaScript code.
      </p>
      <p>JSX is used to describe how the UI should look like.</p>
      <p>
        JSX is compiled by <a href='https://babeljs.io/'>Babel</a> to{' '}
        <code>React.createElement()</code> call that returns a React
        Element.{' '}
      </p>
      <p>
        Any valid JavaScript expression can be embedded inside the curly braces
        in JSX.
      </p>
      <p>
        JSX is like a plain JavaScript object, it can be assigned to variables,
        returned from functions, passed to functions, passed to logical and
        ternary operators, passed{' '}
        <a href='https://reactjs.org/docs/context.html#before-you-use-context'>
          as a prop
        </a>{' '}
        etc.
      </p>
    </div>
  );
};

export default ReactJSX;
