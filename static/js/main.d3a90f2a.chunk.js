(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,a){e.exports=a(91)},55:function(e,t,a){},57:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),c=a.n(r),o=(a(55),a(41)),s=a(42),i=a(47),m=a(43),p=a(48),u=(a(57),a(30)),d=a(45),h=a.n(d),E=a(46),f=a.n(E),g=a(27),b=a.n(g),w=a(40),v=a(17),R=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Introduction"),l.a.createElement("h2",null,"The page provides a brief summary of the React v16 main concepts as well as an overview of selected technologies which are used with React."),l.a.createElement("p",null,"The aim of this page is to present the main ",l.a.createElement("span",{className:"font-weight-bold"},"React v16")," concepts in a short and concise way. Links to external resources are provided for more detailed information on each topic. "),l.a.createElement("ul",null,l.a.createElement("li",null,"React"),l.a.createElement("li",null,"React Componets"),l.a.createElement("li",null,"React Elements"),l.a.createElement("li",null,"JSX"),l.a.createElement("li",null,"Handling Events in React"),l.a.createElement("li",null,"Change Detection in React"),l.a.createElement("li",null,"Create React App"),l.a.createElement("li",null,"React Router"),l.a.createElement("li",null,"ES6 modules"),l.a.createElement("li",null,"Webpack")),l.a.createElement("p",{className:"font-weight-bold mb-0 pt-3"},"Bibliography"),l.a.createElement("p",{className:"font-weight-light mb-1"},"Following resources were used for writing the articles:"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://reactjs.org/docs/getting-started.html"},"React Docs")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html"},"React Components, Elements, and Instances")," - React Blog"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://overreacted.io/react-as-a-ui-runtime/"},"React as a UI Runtime")," - Dan Abramov's Blog"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://blog.angularindepth.com/what-every-front-end-developer-should-know-about-change-detection-in-angular-and-react-508f83f58c6a"},"What every front-end developer should know about change detection in Angular and React")," - Change Detection"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/"},"The difference between Virtual DOM and DOM")," - Change Detection"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/facebook/create-react-app"},"Create React App Docs")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/ReactTraining/react-router/tree/master/packages/react-router/docs/api"},"React Router Docs")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-modules"},"ECMAScript Specification")," - ES6 Modules"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"},"import")," - ES6 Modules (MDN)"),l.a.createElement("li",null,l.a.createElement("a",{href:"http://exploringjs.com/es6/ch_modules.html"},"Exploring JS: Modules")," - ES6 Modules"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://developers.google.com/web/fundamentals/primers/modules"},"Using JavaScript modules on the web")," - Google Developers Web"),l.a.createElement("li",null,l.a.createElement("a",{href:"https://webpack.js.org/concepts"},"Webpack Docs"))))},k=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"React"),l.a.createElement("h2",null,"This page is an overview of the essential React concepts."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://reactjs.org/"},"React")," is a JavaScript library for building user interfaces."),l.a.createElement("p",null,"React offers a new way of constructing the UI: it supports ",l.a.createElement("a",{href:"https://reactjs.org/docs/introducing-jsx.html#why-jsx"},"separation of concerns")," instead of separaion of technologies."),l.a.createElement("p",null,"React enforces declarative programming (",l.a.createElement("a",{href:"https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom"},"link"),")."),l.a.createElement("p",null,"As a part of a declarative approach React abstracts away HTML DOM manipulation: we declare what a component should look like and React calls the HTML DOM API methods under the hood (",l.a.createElement("a",{href:"https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom"},"link"),")."),l.a.createElement("p",null,"It's considered the best practice not to manipulate the HTML DOM directly when using React."),l.a.createElement("p",null,"React supports ",l.a.createElement("a",{href:"https://reactjs.org/docs/two-way-binding-helpers.html#overview"},"one-way data binding"),' (it means data flow one way - from owner to child). Two-way data binding can be implemented in React by listening to a "change" event, reading from the user input and updating the app state with setState() method (',l.a.createElement("a",{href:"https://reactjs.org/docs/two-way-binding-helpers.html#overview"},"link"),")."))},y=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"React Components"),l.a.createElement("h2",null,"On this page the React Components main concepts are presented."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://reactjs.org/docs/components-and-props.html"},"React Components")," are independent, reusable pieces of UI."),l.a.createElement("p",null,"React Components return React Elements."),l.a.createElement("p",null,"Components are created using JavaScript function declaration or by subclassing ",l.a.createElement("code",null,"React.Component")," class (Function and Class Components)."),l.a.createElement("p",null,"The ",l.a.createElement("a",{href:"https://reactjs.org/docs/react-component.html#the-component-lifecycle"},"Component Lifecycle")," looks as follows: ",l.a.createElement("code",null,"Mount")," --\x3e ",l.a.createElement("code",null,"Update")," --\x3e ",l.a.createElement("code",null,"Unmount"),"."),l.a.createElement("p",{className:"font-italic font-weight-bold"},"State"),l.a.createElement("p",null,"State is a feature available only for Class Components (Function Components can use state via ",l.a.createElement("a",{href:"https://reactjs.org/docs/hooks-intro.html"},"hooks"),")."),l.a.createElement("p",null,"State is a JavaScript object."),l.a.createElement("p",{className:"font-italic font-weight-bold"},"Props"),l.a.createElement("p",null,"Props is a JavaScript object."),l.a.createElement("p",{className:"font-italic font-weight-bold"},"setState()"),l.a.createElement("p",null,l.a.createElement("code",null,"setState()")," does not always update ",l.a.createElement("code",null,"this.state")," immediately after it is called, sometimes multiple ",l.a.createElement("code",null,"setState()")," calls can be batched and executed later (",l.a.createElement("a",{href:"https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous"},"link"),")."),l.a.createElement("p",null,l.a.createElement("code",null,"setState()")," can take two kinds of parameters: an object literal or a function (",l.a.createElement("a",{href:"https://reactjs.org/docs/react-component.html#setstate"},"link"),")."),l.a.createElement("p",null,"The object literal parameter is used when the timing of state update is not important for app functioning (means that next application state does not rely on the updated state value)."),l.a.createElement("p",null,"The function parameter is used when the timing of setting a new state matters. The function passed to the ",l.a.createElement("code",null,"setState()")," receives previous state and props at the time update is applied as arguments (",l.a.createElement("a",{href:"https://reactjs.org/docs/faq-state.html#how-do-i-update-state-with-values-that-depend-on-the-current-state"},"link"),"). This function should be pure (",l.a.createElement("a",{href:"https://reactjs.org/docs/react-component.html#setstate"},"link"),")."),l.a.createElement("p",{className:"font-weight-bold"},"Rules to follow when working with ",l.a.createElement("code",null,"this.state")),l.a.createElement("p",null,"Initial component state (which is used for component mounting) is assigned directly in a ",l.a.createElement("code",null,"constructor()")," method."),l.a.createElement("p",null,"When the state should be changed, it is not changed directly (by an assignment of ",l.a.createElement("code",null,"this.state"),") but with a ",l.a.createElement("code",null,"setState()")," function call (",l.a.createElement("a",{href:"https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important"},"link"),")."),l.a.createElement("p",null,"To avoid direct state change, the ",l.a.createElement("code",null,"this.state")," properties are copied into separate varialbes, the variables are changed and then used to set a new state in a ",l.a.createElement("code",null,"setState()")," function call."),l.a.createElement("p",null,"Care should be taken if the state properties are copied with methods which return a shallow copy of objects (f.e. the ",l.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"},"slice")," method). If the object properties of ",l.a.createElement("code",null,"this.state")," are copied by reference, then changing them in the copied object will also change them in ",l.a.createElement("code",null,"this.state"),"."),l.a.createElement("p",null,"According to React Docs it should be avoided to copy props into the state in the constructor method. Setting initial state from props is possible only when it is explicitly defined that the prop updates won't be important for the component (",l.a.createElement("a",{href:"https://reactjs.org/docs/react-component.html#constructor"},"link"),")."),l.a.createElement("p",{className:"font-weight-bold pt-3"},"Component Lifecycle Methods"),l.a.createElement("p",null,"Lifecycle methods is a feature available only for Class Components (not available for Function Components)."),l.a.createElement("p",{className:"font-italic font-weight-bold"},"render()"),l.a.createElement("p",null,"The ",l.a.createElement("a",{href:"https://reactjs.org/docs/react-component.html#render"},l.a.createElement("code",null,"render()"))," method is mandatory in a ",l.a.createElement("code",null,"React.Component")," subclass."),l.a.createElement("p",null,"What ",l.a.createElement("code",null,"render()")," method does when called: it inspects ",l.a.createElement("code",null,"this.props")," and ",l.a.createElement("code",null,"this.state")," and returns an element to render or null (",l.a.createElement("a",{href:"https://reactjs.org/docs/react-component.html#render"},"link"),")."),l.a.createElement("p",null,l.a.createElement("code",null,"render()")," method should be a pure function (means it should not modify component state, it should return the same result each time it is invoked, it should not directly interact with the browser)."))},S=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"React elements"),l.a.createElement("h2",null,"On this page main concepts of React Elements are presented."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://reactjs.org/docs/rendering-elements.html"},"Elements")," are the smallest building blocks of React apps."),l.a.createElement("p",null,"The most common way to create an element is via the JSX which is compiled to ",l.a.createElement("code",null,"React.createElement()")," call."),l.a.createElement("p",null,l.a.createElement("code",null,"React.createElement()")," function creates a React Element - a plain Javascript object that describes some HTML element (its properties and children)."),l.a.createElement("p",null,"All created React Elements are included as nodes into React ",l.a.createElement("a",{href:"https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom"},"Virtual DOM"),"."),l.a.createElement("p",null,"Elements are ",l.a.createElement("a",{href:"https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element"},"immutable"),", Elements' immutability is one of the most important features required for the Virtual DOM comparisons in the Change Detection process."),l.a.createElement("p",null,"The ",l.a.createElement("code",null,"ReactDOM.render()")," method renders React Elements into the HTML DOM nodes."))},C=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"JSX"),l.a.createElement("h2",null,"This page describes JSX (JavaScript XML)."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://reactjs.org/docs/introducing-jsx.html"},"JSX")," is a JavaScript syntax extention."),l.a.createElement("p",null,"Basically JSX is a way of writing HTML-like code inside JavaScript code."),l.a.createElement("p",null,"JSX is used to describe how the UI should look like."),l.a.createElement("p",null,"JSX is compiled by ",l.a.createElement("a",{href:"https://babeljs.io/"},"Babel")," to ",l.a.createElement("code",null,"React.createElement()")," call that returns a React Element. "),l.a.createElement("p",null,"Any valid JavaScript expression can be embedded inside the curly braces in JSX."),l.a.createElement("p",null,"JSX is like a plain JavaScript object, it can be assigned to variables, returned from functions, passed to functions, passed to logical and ternary operators etc."))},j=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Handling Events in React"),l.a.createElement("h2",null,"Brief overview of event handling in React."),l.a.createElement("p",null,"Event handlers are declared in JSX (when an event handler is declared, under the hood React selects the relevant HTML DOM nodes and sets event listeners for them)."),l.a.createElement("p",null,"Event handlers are declared as properties of React Elements. There is a corresponding property for each DOM event (onClick etc)."),l.a.createElement("p",null,"Event handlers can be attached only to elements that represent DOM nodes and can not be attached to elements that represent user-defined components."),l.a.createElement("p",null,"React passes to event handlers instances of ",l.a.createElement("a",{href:"https://reactjs.org/docs/events.html"},l.a.createElement("code",null,"SyntheticEvent")),"."),l.a.createElement("p",null,l.a.createElement("code",null,"SyntheticEvent")," is a cross-browser wrapper around the browser\u2019s native event (this wrapper accounts for differences in events implementation across different browsers)."))},L=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Change Detection in React"),l.a.createElement("h2",null,"This page is an overview of the change detection mechanism in ",l.a.createElement("span",{className:"font-weight-bold"},"React v16"),". The ",l.a.createElement("a",{href:"https://twitter.com/dan_abramov/status/981712092611989509?lang=en"},"Render and Commit phases")," of the component lifecycle are described for the web apps that use React DOM ",l.a.createElement("a",{href:"https://overreacted.io/react-as-a-ui-runtime/#renderers"},"renderer"),"."),l.a.createElement("p",{className:"font-italic font-weight-bold"},"What is change detection?"),l.a.createElement("p",null,"Change detection is a mechanism that synchronises the application state with the user interface."),l.a.createElement("p",null,"At its core change detection is a number of algorithms in a given framework or a library that track changes in the application state and render the updated state to the screen."),l.a.createElement("p",null,"Change detection process has two main parts: tracking changes and rendering."),l.a.createElement("p",{className:"font-italic font-weight-bold"},"Change detection implementation in React"),l.a.createElement("p",null,"The change detection process starts with a call of ",l.a.createElement("code",null,"setState()")," function or with a change of props."),l.a.createElement("p",null,"After the change detection process is started, React executes the ",l.a.createElement("code",null,"render()")," function that returns a new version of Virtual DOM tree. React compares the old and the new Virtual DOM to find difference between them (",l.a.createElement("a",{href:"https://reactjs.org/docs/reconciliation.html"},"reconciliation"),"). When the difference is found, React creates a patch that is used to update the corresponding HTML DOM nodes."),l.a.createElement("p",null,"React updates the HTML DOM during the ",l.a.createElement("a",{href:"https://twitter.com/dan_abramov/status/981712092611989509?lang=en"},"Commit phase"),"."),l.a.createElement("p",null,"** TODO: React Fiber **"),l.a.createElement("p",null,"React Fiber is a new implementation of React core algorithm."),l.a.createElement("p",null,"The main feature of React Fiber is ",l.a.createElement("span",{className:"font-weight-bold"},"incremental rendering")," (ability to split rendering work into chunks and spread it over multiple frames)."),l.a.createElement("p",null,"React Fiber assigns a priority to different types of updates."))},T=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Create React App"),l.a.createElement("h2",null,"Intro to Create React App."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/facebook/create-react-app"},"Create React App")," is an officially supported CLI tool for creating React applications."),l.a.createElement("p",null,"CRA offers a project setup and provides project build tools (such as Webpack, Babel, ESLint) which are preconfigured by default."),l.a.createElement("p",null,"The project setup supports ES6 modules."),l.a.createElement("p",null,"For the project to build two files are mandatory: ",l.a.createElement("code",null,"public/index.html")," (the page template) and ",l.a.createElement("code",null,"src/index.js")," (JavaScript entry point)."),l.a.createElement("p",null,"Only files inside the ",l.a.createElement("code",null,"src")," directory are processed by Webpack, therefore all JS and CSS files must be placed there."),l.a.createElement("p",null,"Only files from ",l.a.createElement("code",null,"public")," and ",l.a.createElement("code",null,"src")," directories are included in the production build. It is allowed to create more top-level directories which can be used for documentation etc."))},M=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"ES6 modules"),l.a.createElement("h2",null,"This page describes ES6 Modules."),l.a.createElement("p",null,"ES6 modules is a ",l.a.createElement("a",{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-modules"},"standardized module system")," in JavaScript."),l.a.createElement("p",null,"ES6 module is a file containing JavaScript code."),l.a.createElement("p",null,'For a browser to know that a file is a ES6 module the script tag must have a type="module" attribute.'),l.a.createElement("p",null,"Each module has its own scope (module scope)."),l.a.createElement("p",null,"Modules are in the strict mode by default."),l.a.createElement("p",null,"Modules are deferred by default, it means that modules are loaded like if the defer attribute is set on the script tag (",l.a.createElement("a",{href:"https://developers.google.com/web/fundamentals/primers/modules#defer"},"link"),")."),l.a.createElement("p",null,"Modules are fetched with CORS (as for 01.2019)."),l.a.createElement("p",null,"Import and export declarations are syntactically restricted to the top-level scope in the module body (that means it should be no import/export declarations inside the block statements or functions)."),l.a.createElement("p",null,"ES6 modules use live bindings (that means both import and export point to the same location in memory, if the exporting module changes a value, that value will be changed in the importing module as well)."),l.a.createElement("p",null,"Modules that export values can change those values at any time, but importing modules cannot change the values of their imports. If a module imports an object, it can change property values that are on that object."),l.a.createElement("p",null,"Export statement makes variables and functions available for other modules."),l.a.createElement("p",null,"There are two types of export: named and default (",l.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"},"link"),")."),l.a.createElement("p",null,"All the modules build a graph of dependencies. The connections between different dependencies come from any import statement. One of the files is used as an entry point to the graph, from the entry point following all the import statements the dependencies are constructed."))},x=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Webpack"),l.a.createElement("h2",null,"This page describes the main concepts of Webpack v4."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://webpack.js.org/"},"Webpack")," is a JavaScript module bundler."),l.a.createElement("p",null,"Webpack transpiles the import/export statements so that the older browsers can also run it (",l.a.createElement("a",{href:"https://webpack.js.org/guides/getting-started/#modules"},"link"),")."),l.a.createElement("p",null,"Webpack won't transpile any other ES6 features except for import/export statements. To transpile ES6 to ES5 with webpack use a webpack loader like Babel (",l.a.createElement("a",{href:"https://webpack.js.org/guides/getting-started/#modules"},"link"),")."))},D=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"React Router"),l.a.createElement("h2",null,"This page provides an overview of React Router v4 features (for web apps)."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/ReactTraining/react-router"},"React Router")," is a library for routing in React Applications."),l.a.createElement("p",null,"React Router composes routes in a declarative way."),l.a.createElement("p",null,"In its core React Router 4 is an API that is composed of React Components."),l.a.createElement("p",null,"The main React Router components are ",l.a.createElement("code",null,"BrowserRouter"),", ",l.a.createElement("code",null,"Link")," and ",l.a.createElement("code",null,"Route"),"."),l.a.createElement("dl",{className:"ml-4"},l.a.createElement("dt",{className:"pb-2"},l.a.createElement("p",{className:"font-weight-bold mb-0"},"BrowserRouter")),l.a.createElement("dd",null,l.a.createElement("p",null,l.a.createElement("code",null,l.a.createElement("a",{href:"https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md"},"BrowserRouter"))," component uses the HTML5 history API to keep UI in sync with the URL."),l.a.createElement("p",null,l.a.createElement("code",null,"BrowserRouter")," component wraps all the ",l.a.createElement("code",null,"Route")," components."),l.a.createElement("p",null,"Like all React components ",l.a.createElement("code",null,"BrowserRouter")," expects to receive a single child element.")),l.a.createElement("dt",{className:"pb-2"},l.a.createElement("p",{className:"font-weight-bold mb-0"},"Link")),l.a.createElement("dd",null,l.a.createElement("p",null,l.a.createElement("code",null,l.a.createElement("a",{href:"https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md"},"Link"))," component is used to generate links to the parts of dynamic content."),l.a.createElement("p",null,l.a.createElement("code",null,"Link")," component renders a usual HTML anchor tag."),l.a.createElement("p",null,"When the ",l.a.createElement("code",null,"Link")," is used for navigation it does not make a full page refresh but tries to update the associated part of UI.")),l.a.createElement("dt",{className:"pb-2"},l.a.createElement("p",{className:"font-weight-bold mb-0"},"Route")),l.a.createElement("dd",null,l.a.createElement("p",null,l.a.createElement("code",null,l.a.createElement("a",{href:"https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Route.md"},"Route"))," component renders UI."),l.a.createElement("p",null,"Main props passed to ",l.a.createElement("code",null,"Route")," are ",l.a.createElement("code",null,"path")," (any valid URL path) and a ",l.a.createElement("a",{href:"https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#route-render-methods"},"render method")," (there are three render methods: ",l.a.createElement("code",null,"component"),", ",l.a.createElement("code",null,"render")," and ",l.a.createElement("code",null,"children"),")."),l.a.createElement("p",null,l.a.createElement("code",null,"Route")," component renders some UI with a render method passed as the props if the current URL matches ",l.a.createElement("code",null,"Route"),"'s props path."),l.a.createElement("p",null,"When ",l.a.createElement("code",null,"component")," is used as a render method, ",l.a.createElement("code",null,"Route")," calls ",l.a.createElement("code",null,"React.createElement()")," with a given component ( it means ",l.a.createElement("code",null,"Route")," renders a new element from a given component each time when called)."),l.a.createElement("p",null,"When ",l.a.createElement("code",null,"render")," is used as a render method, a function is passed in to the ",l.a.createElement("code",null,"render")," which runs each time when the ",l.a.createElement("code",null,"Route")," is called."),l.a.createElement("p",null,l.a.createElement("code",null,"Route")," component passes to its render methods three props: ",l.a.createElement("code",null,"match"),", ",l.a.createElement("code",null,"location")," and ",l.a.createElement("code",null,"history")," (",l.a.createElement("a",{href:"https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#route-props"},"link"),")."))),l.a.createElement("p",null,"** TODO: Dynamic routing with ",l.a.createElement("code",null,"match")," **"))},J=function(){return l.a.createElement("p",null,"Page was not found.")},O=function(){return l.a.createElement("div",{className:"pt-4"},l.a.createElement(w.a,null,l.a.createElement(v.a,{exact:!0,path:"/",component:R}),l.a.createElement(v.a,{path:"/react-info",component:k}),l.a.createElement(v.a,{path:"/react-components",component:y}),l.a.createElement(v.a,{path:"/react-elements",component:S}),l.a.createElement(v.a,{path:"/react-jsx",component:C}),l.a.createElement(v.a,{path:"/handling-events-in-react",component:j}),l.a.createElement(v.a,{path:"/change-detection-in-react",component:L}),l.a.createElement(v.a,{path:"/create-react-app",component:T}),l.a.createElement(v.a,{path:"/react-router",component:D}),l.a.createElement(v.a,{path:"/es6-modules",component:M}),l.a.createElement(v.a,{path:"/webpack",component:x}),l.a.createElement(v.a,{component:J})),l.a.createElement("p",{className:"font-italic font-weight-bold pt-4 pb-2"},"View code on ",l.a.createElement("a",{href:"https://github.com/eremina-official/react-info-spa"},"Github")))},N=a(12),I=a(22),W=a.n(I),A=a(10),U=a.n(A),B=function(){return l.a.createElement(W.a,{variant:"light",bg:"light",expand:"md",collapseOnSelect:!0,className:"align-items-start navbar-custom"},l.a.createElement(W.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(W.a.Collapse,{id:"responsive-navbar-nav",className:"flex-column"},l.a.createElement("p",{className:"font-weight-bold mb-0 align-self-start pt-3 pt-md-0 pl-md-2"},"Contents"),l.a.createElement(U.a,{className:"mr-auto flex-column"},l.a.createElement(N.LinkContainer,{exact:!0,to:"/"},l.a.createElement(U.a.Link,null,"Intro")),l.a.createElement(N.LinkContainer,{to:"/react-info"},l.a.createElement(U.a.Link,null,"React")),l.a.createElement(N.LinkContainer,{to:"/react-components"},l.a.createElement(U.a.Link,null,"React Components")),l.a.createElement(N.LinkContainer,{to:"/react-elements"},l.a.createElement(U.a.Link,null,"React Elements")),l.a.createElement(N.LinkContainer,{to:"/react-jsx"},l.a.createElement(U.a.Link,null,"JSX")),l.a.createElement(N.LinkContainer,{to:"/handling-events-in-react"},l.a.createElement(U.a.Link,null,"Handling Events")),l.a.createElement(N.LinkContainer,{to:"/change-detection-in-react"},l.a.createElement(U.a.Link,null,"Change Detection in React")),l.a.createElement(N.LinkContainer,{to:"/create-react-app"},l.a.createElement(U.a.Link,null,"Create React App")),l.a.createElement(N.LinkContainer,{to:"/react-router"},l.a.createElement(U.a.Link,null,"React Router")),l.a.createElement(N.LinkContainer,{to:"/es6-modules"},l.a.createElement(U.a.Link,null,"ES6 Modules")),l.a.createElement(N.LinkContainer,{to:"/webpack"},l.a.createElement(U.a.Link,null,"Webpack")))))},H=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(h.a,{className:"App"},l.a.createElement(f.a,null,l.a.createElement(b.a,{xs:12,md:4,className:"bg-light"},l.a.createElement(B,null)),l.a.createElement(b.a,{xs:12,md:8},l.a.createElement(O,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[49,2,1]]]);
//# sourceMappingURL=main.d3a90f2a.chunk.js.map