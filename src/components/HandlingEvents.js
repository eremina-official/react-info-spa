import React from 'react';

const HandlingEvents = () => {
  return (
    <div>
      <h1>Handling Events in React</h1>
      <h2>Brief overview of event handling in React.</h2>
      <p>Event handlers are declared in JSX (when an event handler is declared, under the hood React selects the relevant HTML DOM nodes and sets event listeners for them).</p>
      <p>Event handlers can be attached only to elements that represent DOM nodes and can not be attached to elements that represent user-defined components.</p>
      <p>React passes to event handlers instances of <a href="https://reactjs.org/docs/events.html"><code>SyntheticEvent</code></a>.</p>
      <p><code>SyntheticEvent</code> is a cross-browser wrapper around the browser’s native event.</p>
    </div>
  );
};

export default HandlingEvents;
