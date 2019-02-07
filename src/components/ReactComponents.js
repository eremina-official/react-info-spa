import React from 'react';

const ReactComponents = () => {
  return (
    <div>
      <h1>React components</h1>
      <h2>On this page the React Components main concepts are presented.</h2>
      <p><a href="https://reactjs.org/docs/components-and-props.html">React Components</a> are independent, reusable pieces of UI.</p>
      <p>React Components return React Elements.</p>
      <p>Components are created using JavaScript function declaration or by subclassing <code>React.Component</code> class (Function and Class Components).</p>
      <p>The <a href="https://reactjs.org/docs/react-component.html#render"><code>render()</code></a> method is mandatory in a <code>React.Component</code> subclass.</p>
      <p>What <code>render()</code> method does when called: it inspects <code>this.props</code> and <code>this.state</code> and returns an element to render or null (<a href="https://reactjs.org/docs/react-component.html#render">link</a>).</p>
      <p><code>render()</code> method should be a pure function.</p>
    </div>
  );
};

export default ReactComponents;