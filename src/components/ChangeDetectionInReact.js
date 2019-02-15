import React from 'react';

const ChangeDetectionInReact = () => {
  return (
    <div>
      <h1>Change Detection in React</h1>
      <h2>This page is an overview of the change detection mechanism in React.</h2>
      <p className="font-italic font-weight-light">What is change detection?</p>
      <p>Change detection is a mechanism that synchronises the application state with the user interface.</p>
      <p>At its core change detection is a number of algorithms in a given framework or a library that track changes in the application state and render the updated state to the screen.</p>
      <p>Change detection process has two main parts: tracking changes and rendering.</p>
      <p className="font-italic font-weight-light">Change detection implementation in React</p>

    </div>
  );
};

export default ChangeDetectionInReact;
