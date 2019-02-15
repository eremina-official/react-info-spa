import React from 'react';

const ReactElements = () => {
  return (
    <div>
      <h1>React elements</h1>
      <h2>On this page main concepts of React Elements are presented.</h2>
      <p><a href="https://reactjs.org/docs/rendering-elements.html">Elements</a> are the smallest building blocks of React apps.</p>
      <p>Elements are plain JavaScript objects.</p>
      <p>React Elements are the nodes in React <a href="https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom">Virtual DOM</a>.</p>
      <p>Elements are <a href="https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element">immutable</a>, immutability is thier core feature required for Virtual DOM comparisons in the Change Detection process.</p>
      <p>The <code>ReactDOM.render()</code> method renders React Elements into the HTML DOM nodes.</p>
      <p>The most common way to create an element is via the JSX which is compiled to <code>React.createElement()</code> call.</p>
    </div>
  );
};

export default ReactElements;