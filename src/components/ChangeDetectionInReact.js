import React from 'react';

const ChangeDetectionInReact = () => {
  return (
    <div>
      <h1>Change Detection in React</h1>
      <h2>This page is an overview of the change detection mechanism in React.</h2>
      <p className="font-italic font-weight-bold">What is change detection?</p>
      <p>Change detection is a mechanism that synchronises the application state with the user interface.</p>
      <p>At its core change detection is a number of algorithms in a given framework or a library that track changes in the application state and render the updated state to the screen.</p>
      <p>Change detection process has two main parts: tracking changes and rendering.</p>

      <p className="font-italic font-weight-bold">Change detection implementation in React</p>
      <p>The change detection process starts with a call of <code>setState()</code> function or with a change of props.</p>
      <p>After the change detection process is started, React executes the <code>render()</code> function that returns a new version of Virtual DOM tree. React compares the old and the new Virtual DOM to find difference between them. When the difference is found, React creates a patch that updates the corresponding HTML DOM nodes.</p>
    </div>
  );
};

export default ChangeDetectionInReact;
