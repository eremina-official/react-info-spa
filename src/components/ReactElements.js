import React from 'react';

const ReactElements = () => {
  return (
    <div>
      <h1>React elements</h1>
      <h2>On this page main concepts of React Elements are presented.</h2>
      <p><a href="https://reactjs.org/docs/rendering-elements.html">Elements</a> are the smallest building blocks of React apps.</p>
      <p>Elements are plain JavaScript objects.</p>
      <p>Elements are immutable.</p>
      <p>The most common way to create an element is via the JSX which is compiled to <code>React.createElement()</code> call.</p>
    </div>
  );
};

export default ReactElements;