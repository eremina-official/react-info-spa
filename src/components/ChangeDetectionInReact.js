import React from 'react';

const ChangeDetectionInReact = () => {
  return (
    <div>
      <h1>Change Detection in React</h1>
      <h2>This page is an overview of the change detection mechanism in <span className="font-weight-bold">React v16</span>. The <a href="https://twitter.com/dan_abramov/status/981712092611989509?lang=en">Render and Commit phases</a> of the component lifecycle are described for the web apps that use React DOM <a href="https://overreacted.io/react-as-a-ui-runtime/#renderers">renderer</a>.</h2>

      <p className="font-italic font-weight-bold">What is change detection?</p>
      <p>Change detection is a mechanism that synchronises the application state with the user interface.</p>
      <p>At its core change detection is a number of algorithms in a given framework or a library that track changes in the application state and render the updated state to the screen.</p>
      <p>Change detection process has two main parts: tracking changes and rendering.</p>

      <p className="font-italic font-weight-bold">Change detection implementation in React</p>
      <p>The change detection process starts with a call of <code>setState()</code> function or with a change of props.</p>
      <p>After the change detection process is started, React executes the <code>render()</code> function that returns a new version of Virtual DOM tree. React compares the old and the new Virtual DOM to find difference between them (<a href="https://reactjs.org/docs/reconciliation.html">reconciliation</a>). When the difference is found, React creates a patch that is used to update the corresponding HTML DOM nodes.</p>

      <p>React updates the HTML DOM during the <a href="https://twitter.com/dan_abramov/status/981712092611989509?lang=en">Commit phase</a>.</p>

      <p>** TODO: React Fiber **</p>
      <p>React Fiber is a new implementation of React core algorithm.</p>
      <p>The main feature of React Fiber is <span className="font-weight-bold">incremental rendering</span> (ability to split rendering work into chunks and spread it over multiple frames).</p>
      <p>React Fiber assigns a priority to different types of updates.</p>
    </div>
  );
};

export default ChangeDetectionInReact;
