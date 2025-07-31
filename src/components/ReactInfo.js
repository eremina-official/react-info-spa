import React from 'react';

const ReactInfo = () => {
  return (
    <div>
      <h1>React</h1>

      <h2>This page is an overview of the essential React concepts.</h2>
      <p>
        <a href='https://react.dev/'>React</a> is a JavaScript library for
        building user interfaces.
      </p>

      <p>
        React offers a new way of constructing the UI: it supports{' '}
        <a href='https://reactjs.org/docs/introducing-jsx.html#why-jsx'>
          separation of concerns
        </a>{' '}
        instead of separaion of technologies.
      </p>

      <p>
        React enforces
        <a href='https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom'>
          declarative programming
        </a>
        . As a part of a declarative approach React abstracts HTML DOM
        manipulation: we declare what a component should look like and React
        calls the HTML DOM API methods under the hood.
      </p>

      <p>
        <b>Rules of React:</b>
      </p>
      <ul>
        <li>Components and hooks must be pure</li>
        <li>React calls Components and Hooks</li>
        <li>
          <a href='https://react.dev/reference/rules/rules-of-hooks'>
            Rules of Hooks
          </a>
        </li>
      </ul>
      <p>
        It's considered the best practice not to manipulate the HTML DOM
        directly when using React.
      </p>

      <p>
        React supports{' '}
        <a href='https://reactjs.org/docs/two-way-binding-helpers.html#overview'>
          one-way data binding
        </a>{' '}
        (it means data flow one way - from owner to child). Two-way data binding
        can be implemented in React by listening to a "change" event, reading
        from the user input and updating the app state with setState() method (
        <a href='https://reactjs.org/docs/two-way-binding-helpers.html#overview'>
          link
        </a>
        ).
      </p>
    </div>
  );
};

export default ReactInfo;
