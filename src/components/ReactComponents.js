import React from 'react';

const ReactComponents = () => {
  return (
    <div>
      <h1>React Components</h1>
      <h2>On this page the React Components main concepts are presented.</h2>
      <p><a href="https://reactjs.org/docs/components-and-props.html">React Components</a> are independent, reusable pieces of UI.</p>
      <p>React Components return React Elements.</p>
      <p>Components are created using JavaScript function declaration or by subclassing <code>React.Component</code> class (Function and Class Components).</p>
      <p>The <a href="https://reactjs.org/docs/react-component.html#the-component-lifecycle">Component Lifecycle</a> looks as follows: <code>Mount</code> --> <code>Update</code> --> <code>Unmount</code>.</p>

      <p className="font-italic font-weight-light">State</p>
      <p>State is a feature available only for Class Components (not available for Function Components).</p>
      <p>State is a JavaScript object.</p>
      <p>Initial component state is assigned directly in a <code>constructor()</code> method.</p>
      <p>When the state should be changed, it is not changed directly (by an assignment) but with a <code>setState()</code> function call.</p>

      <p className="font-italic font-weight-light">Props</p>
      <p>Props is a JavaScript object.</p>

      <p className="font-italic font-weight-light">Render()</p>
      <p>The <a href="https://reactjs.org/docs/react-component.html#render"><code>render()</code></a> method is mandatory in a <code>React.Component</code> subclass.</p>
      <p>What <code>render()</code> method does when called: it inspects <code>this.props</code> and <code>this.state</code> and returns an element to render or null (<a href="https://reactjs.org/docs/react-component.html#render">link</a>).</p>
      <p><code>render()</code> method should be a pure function (means it should not modify component state, it returns the same result each times it is invoked, it does not directly interact with the browser).</p>
    </div>
  );
};

export default ReactComponents;