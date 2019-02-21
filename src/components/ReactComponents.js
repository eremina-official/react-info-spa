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

      <p className="font-italic font-weight-bold">State</p>
      <p>State is a feature available only for Class Components (not available for Function Components).</p>
      <p>State is a JavaScript object.</p>
      <p>Initial component state (which is used for component mounting) is assigned directly in a <code>constructor()</code> method.</p>
      <p>When the state should be changed, it is not changed directly (by an assignment of <code>this.state</code>) but with a <code>setState()</code> function call.</p>

      <p className="font-italic font-weight-bold">Props</p>
      <p>Props is a JavaScript object.</p>
      
      <p className="font-italic font-weight-bold">setState()</p>
      <p><code>setState()</code> does not always update <code>this.state</code> immediately after it is called, sometimes multiple <code>setState()</code> calls can be batched and executed later (<a href="https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous">link</a>).</p>
      <p><code>setState()</code> can take two kinds of parameters: an object literal or a function.</p>
      <p>The object literal parameter is used when the timing of state update is not important for app functioning (means that next application state does not rely on the updated state value).</p>
      <p>The function parameter is used when the timing of setting a new state matters. The function passed to the <code>setState()</code> receives previous state and props at the time update is applied as arguments. This function should be pure.</p>


      <p className="font-weight-bold pt-3">Component Lifecycle Methods</p>
      <p>Lifecycle methods is a feature available only for Class Components (not available for Function Components).</p>

      <p className="font-italic font-weight-bold">render()</p>
      <p>The <a href="https://reactjs.org/docs/react-component.html#render"><code>render()</code></a> method is mandatory in a <code>React.Component</code> subclass.</p>
      <p>What <code>render()</code> method does when called: it inspects <code>this.props</code> and <code>this.state</code> and returns an element to render or null (<a href="https://reactjs.org/docs/react-component.html#render">link</a>).</p>
      <p><code>render()</code> method should be a pure function (means it should not modify component state, it should return the same result each times it is invoked, it should not directly interact with the browser).</p>

    </div>
  );
};

export default ReactComponents;