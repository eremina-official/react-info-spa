import React from 'react';

const ReactComponents = () => {
  return (
    <div>
      <h1>React Components</h1>

      <h2>On this page the React Components main concepts are presented.</h2>

      <p>
        <a href='https://react.dev/reference/react-dom/components'>
          React Components
        </a>{' '}
        are independent, reusable pieces of UI.
      </p>

      <p>
        React Components accept props as parameters and return React Elements.
      </p>

      <p>
        Components are created using JavaScript function declaration or by
        subclassing <code>React.Component</code> class (Function and Class
        Components).
      </p>

      <p>
        The{' '}
        <a href='https://reactjs.org/docs/react-component.html#the-component-lifecycle'>
          Component Lifecycle
        </a>{' '}
        looks as follows: <code>Mount</code> → <code>Update</code> →{' '}
        <code>Unmount</code>.
      </p>
      <p>
        <code>Mount</code> - component is created and inserted into the DOM.
      </p>
      <p>
        <code>Update</code> - component is updated and re-rendered.
      </p>
      <p>
        <code>Unmount</code> - component is removed from the DOM.
      </p>

      <p className='fw-bold'>State</p>

      <p>
        State is a JavaScript object. State should be immutable (means that it
        should not be changed directly, but rather updated using the{' '}
        <code>setState()</code> or a hook method).
      </p>

      <p className='fw-bold'>Props</p>
      <p>Props is a JavaScript object.</p>
      <p>Props should be immutable.</p>

      <p className='fw-bold'>setState()</p>
      <p>
        <code>setState()</code> does not always update <code>this.state</code>{' '}
        immediately after it is called, sometimes multiple{' '}
        <code>setState()</code> calls can be batched and executed later (
        <a href='https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous'>
          link
        </a>
        ).
      </p>
      <p>
        <code>setState()</code> can take two kinds of parameters: an object
        literal or a function (
        <a href='https://reactjs.org/docs/react-component.html#setstate'>
          link
        </a>
        ).
      </p>
      <p>
        The object literal parameter is used when the timing of state update is
        not important for app functioning (means that next application state
        does not rely on the updated state value).
      </p>
      <p>
        The function parameter is used when the timing of setting a new state
        matters. The function passed to the <code>setState()</code> receives
        previous state and props at the time update is applied as arguments (
        <a href='https://reactjs.org/docs/faq-state.html#how-do-i-update-state-with-values-that-depend-on-the-current-state'>
          link
        </a>
        ). This function should be pure (
        <a href='https://reactjs.org/docs/react-component.html#setstate'>
          link
        </a>
        ).
      </p>

      <p className='fw-bold'>
        Rules to follow when working with <code>this.state</code>
      </p>
      <p>
        Initial component state (which is used for component mounting) is
        assigned directly in a <code>constructor()</code> method.
      </p>

      <p>
        When the state should be changed, it is not changed directly (by an
        assignment of <code>this.state</code>) but with a{' '}
        <code>setState()</code> function call (
        <a href='https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important'>
          link
        </a>
        ).
      </p>

      <p>
        To avoid direct state change, the <code>this.state</code> properties are
        copied into separate varialbes, the variables are changed and then used
        to set a new state in a <code>setState()</code> function call.
      </p>

      <p>
        Care should be taken if the state properties are copied with methods
        which return a shallow copy of objects (f.e. the{' '}
        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice'>
          slice
        </a>{' '}
        method). If the object properties of <code>this.state</code> are copied
        by reference, then changing them in the copied object will also change
        them in <code>this.state</code>.
      </p>

      <p>
        According to React Docs it should be avoided to copy props into the
        state in the constructor method. Setting initial state from props is
        possible only when it is explicitly defined that the prop updates won't
        be important for the component (
        <a href='https://reactjs.org/docs/react-component.html#constructor'>
          link
        </a>
        ).
      </p>

      <p className='fw-bold pt-3'>Class Component Lifecycle Methods</p>
      <p>
        Lifecycle methods is a feature available only for Class Components (not
        available for Function Components).
      </p>
      <p>
        <code>componentDidMount()</code> - invoked after the component was
        mounted to the DOM.
      </p>
      <p>
        <code>componentDidUpdate()</code> - called after component is
        re-rendered after props or state change.
      </p>
      <p>
        <code>componentWillUnmount()</code> - called after component is removed
        from the DOM. This method can be used for cleanup for componentDidMount
        and componentDidUpdate effects.
      </p>

      <p className='fw-bold'>render()</p>
      <p>
        The{' '}
        <a href='https://reactjs.org/docs/react-component.html#render'>
          <code>render()</code>
        </a>{' '}
        method is mandatory in a <code>React.Component</code> subclass.
      </p>
      <p>
        What <code>render()</code> method does when called: it inspects{' '}
        <code>this.props</code> and <code>this.state</code> and returns an
        element to render or null (
        <a href='https://reactjs.org/docs/react-component.html#render'>link</a>
        ).
      </p>
      <p>
        <code>render()</code> method should be a pure function (means it should
        not modify component state, it should return the same result each time
        it is invoked, it should not directly interact with the browser).
      </p>

      <section>
        <b>When React components re-render:</b>
        <ul>
          <li>When the component's state changes</li>
          <li>
            When the parent component re-renders (which would cause the child
            component's props to change)
          </li>
          <li>When the Context changes</li>
          <li>When Hooks returned values change</li>
        </ul>
      </section>
    </div>
  );
};

export default ReactComponents;
