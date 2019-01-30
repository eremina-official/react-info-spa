import React from 'react';

const ES6Modules = () => {
  return (
    <div>
      <h1>ES6 modules</h1>
      <p>ES6 modules is a <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-modules">standardized module system</a> in JavaScript.</p>
      <p>ES6 module is a file containing JavaScript code.</p>
      <p>For a browser to know that a file is a ES6 module the script tag must have a type="module" attribute.</p>
      <p>Each module has its own scope (module scope).</p>
      <p>Modules are in the strict mode by default.</p>
      <p>Modules are deferred by default (modules are loaded like if the defer attribute is set on the script tag).</p>
      <p>Modules are fetched with CORS (as for 01.2019).</p>
      <p>Import and export declarations are syntactically restricted to the top-level scope in the module body (that means it should be no import/export declarations inside the block statements or functions).</p>
      <p>ES6 modules use live bindings (that means both import and export point to the same location in memory, if the exporting module changes a value, that value will be changed in the importing module as well).</p>
      <p>Modules that export values can change those values at any time, but importing modules cannot change the values of their imports. If a module imports an object, it can change property values that are on that object.</p>
      <p>Export statement makes variables and functions available for other modules.</p>
      <p>There are two types of export: named and default (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export">link</a>).</p>
      <p>All the modules build a graph of dependencies. The connections between different dependencies come from any import statements. One of the files is used as an entry point to the graph, from the entry point following all the import statements the dependencies are constructed.</p>
    </div>
  );
};

export default ES6Modules;