import React from 'react';

const ReactElements = () => {
  return (
    <div>
      <h1>React elements</h1>
      <p className='fw-light fs-5'>
        On this page main concepts of React Elements are presented.
      </p>
      <p>
        <a href='https://reactjs.org/docs/rendering-elements.html'>Elements</a>{' '}
        are the smallest building blocks of React apps.
      </p>
      <p>
        The most common way to create an element is via the JSX which is
        compiled to <code>React.createElement()</code> call.
      </p>
      <p>
        <code>React.createElement()</code> function creates a React Element - a
        plain Javascript object that describes some HTML element (its properties
        and children).
      </p>
      <p>
        All created React Elements are included as nodes into React{' '}
        <a href='https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom'>
          Virtual DOM
        </a>
        .
      </p>
      <p>
        Elements are{' '}
        <a href='https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element'>
          immutable
        </a>
        , Elements' immutability is one of the most important features required
        for the Virtual DOM comparisons in the Change Detection process.
      </p>
      <p>
        The <code>ReactDOM.render()</code> method renders React Elements into
        the HTML DOM nodes.
      </p>
    </div>
  );
};

export default ReactElements;
