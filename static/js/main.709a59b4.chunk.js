(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(81)},46:function(e,t,a){},48:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),o=(a(46),a(32)),m=a(33),s=a(38),u=a(34),i=a(39),p=(a(48),a(83)),d=a(36),E=a.n(d),h=a(37),f=a.n(h),b=a(20),g=a.n(b),R=a(85),v=a(82),w=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Introduction"),l.a.createElement("h2",null,"This page is a brief summary of fundamental React concepts. Selected technologies which are used with React are also covered."),l.a.createElement("ul",null,l.a.createElement("li",null,"React"),l.a.createElement("li",null,"React componets"),l.a.createElement("li",null,"React elements"),l.a.createElement("li",null,"JSX"),l.a.createElement("li",null,"Create React App"),l.a.createElement("li",null,"React Router"),l.a.createElement("li",null,"ES6 modules"),l.a.createElement("li",null,"Webpack")))},k=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"React"),l.a.createElement("h2",null,"This page is an overview of the essential React concepts."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://reactjs.org/"},"React")," is a JavaScript library for building user interfaces."),l.a.createElement("p",null,"React offers a new way of constructing the UI: it supports ",l.a.createElement("a",{href:"https://reactjs.org/docs/introducing-jsx.html#why-jsx"},"separation of concerns")," instead of separaion of technologies."),l.a.createElement("p",null,"React enforces declarative programming."),l.a.createElement("p",null,"Virtual DOM"))},y=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"React components"),l.a.createElement("h2",null,"On this page the React Components main concepts are presented."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://reactjs.org/docs/components-and-props.html"},"React Components")," are independent, reusable pieces of UI."),l.a.createElement("p",null,"React Components return React Elements."),l.a.createElement("p",null,"Components are created using JavaScript function declaration or by subclassing ",l.a.createElement("code",null,"React.Component")," class (Function and Class Components)."),l.a.createElement("p",null,"The ",l.a.createElement("a",{href:"https://reactjs.org/docs/react-component.html#render"},l.a.createElement("code",null,"render()"))," method is mandatory in a ",l.a.createElement("code",null,"React.Component")," subclass."),l.a.createElement("p",null,"What ",l.a.createElement("code",null,"render()")," method does when called: it inspects ",l.a.createElement("code",null,"this.props")," and ",l.a.createElement("code",null,"this.state")," and returns an element to render or null (",l.a.createElement("a",{href:"https://reactjs.org/docs/react-component.html#render"},"link"),")."),l.a.createElement("p",null,l.a.createElement("code",null,"render()")," method should be a pure function."))},S=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"React elements"),l.a.createElement("h2",null,"On this page main concepts of React Elements are presented."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://reactjs.org/docs/rendering-elements.html"},"Elements")," are the smallest building blocks of React apps."),l.a.createElement("p",null,"Elements are plain JavaScript objects."),l.a.createElement("p",null,"Elements are immutable."),l.a.createElement("p",null,"The most common way to create an element is via using JSX which is compiled to ",l.a.createElement("code",null,"React.createElement()")," call."))},x=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"JSX"),l.a.createElement("h2",null,"This page describes JSX (JavaScript XML)."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://reactjs.org/docs/introducing-jsx.html"},"JSX")," is a JavaScript syntax extention."),l.a.createElement("p",null,"JSX is used to describe how the UI should look like."),l.a.createElement("p",null,"JSX is compiled to ",l.a.createElement("code",null,"React.createElement()")," call that returns a React element. "))},j=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Create React App"),l.a.createElement("h2",null,"Intro to Create React App."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/facebook/create-react-app"},"Create React App")," is an officially supported way to create React applications."),l.a.createElement("p",null,"CRA offers a project setup that needs no configuration."),l.a.createElement("p",null,"CRA uses project build tools (such as Webpack, Babel, ESLint) which are preconfigured by default."),l.a.createElement("p",null,"The project setup supports ES6 modules."),l.a.createElement("p",null,"For the project to build two files are mandatory: ",l.a.createElement("code",null,"public/index.html")," (the page template) and ",l.a.createElement("code",null,"src/index.js")," (JavaScript entry point)."),l.a.createElement("p",null,"Only files inside the ",l.a.createElement("code",null,"src")," directory are processed by Webpack, therefore all JS and CSS files must be placed there."),l.a.createElement("p",null,"Only files from ",l.a.createElement("code",null,"public")," and ",l.a.createElement("code",null,"src")," directories are included in the production build. It is allowed to create more top-level directories which can be used for documentation etc."))},I=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"ES6 modules"),l.a.createElement("h2",null,"This page describes ES6 Modules."),l.a.createElement("p",null,"ES6 modules is a ",l.a.createElement("a",{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-modules"},"standardized module system")," in JavaScript."),l.a.createElement("p",null,"ES6 module is a file containing JavaScript code."),l.a.createElement("p",null,'For a browser to know that a file is a ES6 module the script tag must have a type="module" attribute.'),l.a.createElement("p",null,"Each module has its own scope (module scope)."),l.a.createElement("p",null,"Modules are in the strict mode by default."),l.a.createElement("p",null,"Modules are deferred by default (modules are loaded like if the defer attribute is set on the script tag)."),l.a.createElement("p",null,"Modules are fetched with CORS (as for 01.2019)."),l.a.createElement("p",null,"Import and export declarations are syntactically restricted to the top-level scope in the module body (that means it should be no import/export declarations inside the block statements or functions)."),l.a.createElement("p",null,"ES6 modules use live bindings (that means both import and export point to the same location in memory, if the exporting module changes a value, that value will be changed in the importing module as well)."),l.a.createElement("p",null,"Modules that export values can change those values at any time, but importing modules cannot change the values of their imports. If a module imports an object, it can change property values that are on that object."),l.a.createElement("p",null,"Export statement makes variables and functions available for other modules."),l.a.createElement("p",null,"There are two types of export: named and default (",l.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"},"link"),")."),l.a.createElement("p",null,"All the modules build a graph of dependencies. The connections between different dependencies come from any import statement. One of the files is used as an entry point to the graph, from the entry point following all the import statements the dependencies are constructed."))},C=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Webpack"),l.a.createElement("h2",null,"This page describes the main concepts of Webpack v4."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://webpack.js.org/"},"Webpack")," is a JavaScript module bundler."),l.a.createElement("p",null,"Webpack transpiles the import/export statements so that the older browsers can also run it (",l.a.createElement("a",{href:"https://webpack.js.org/guides/getting-started/#modules"},"link"),")."),l.a.createElement("p",null,"Webpack won't transpile any other ES6 features except for import/export statements. To transpile ES6 to ES5 with webpack use a webpack loader like Babel (",l.a.createElement("a",{href:"https://webpack.js.org/guides/getting-started/#modules"},"link"),")."))},J=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"React Router"),l.a.createElement("h2",null,"This page provides an overview of React Router v4 features."),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/ReactTraining/react-router"},"React Router")," is a library for routing in React Applications."),l.a.createElement("p",null,"React Router composes routes in a declarative way."),l.a.createElement("p",null,"In its core React Router 4 is an API that is composed of React Components."),l.a.createElement("p",null,"The main React Router components are ",l.a.createElement("code",null,"BrowserRouter"),", ",l.a.createElement("code",null,"Link")," and ",l.a.createElement("code",null,"Route"),"."),l.a.createElement("dl",{className:"ml-4"},l.a.createElement("dt",{className:"pb-2"},l.a.createElement("code",null,"BrowserRouter")),l.a.createElement("dd",null,l.a.createElement("p",null,l.a.createElement("code",null,"BrowserRouter")," component wraps all the ",l.a.createElement("code",null,"Route")," components."),l.a.createElement("p",null,"Like all React components ",l.a.createElement("code",null,"BrowserRouter")," expects to receive a single child element.")),l.a.createElement("dt",{className:"pb-2"},l.a.createElement("code",null,"Link")),l.a.createElement("dd",null,l.a.createElement("p",null,l.a.createElement("code",null,"Link")," component is used to generate links to the parts of dynamic content."),l.a.createElement("p",null,l.a.createElement("code",null,"Link")," component renders a usual HTML anchor tag."),l.a.createElement("p",null,"When the ",l.a.createElement("code",null,"Link")," is used for navigation it does not make a full page refresh but tries to update the associated part of UI.")),l.a.createElement("dt",{className:"pb-2"},l.a.createElement("code",null,"Route")),l.a.createElement("dd",null,l.a.createElement("p",null,"Main props passed to ",l.a.createElement("code",null,"Route")," are ",l.a.createElement("code",null,"path")," (any valid URL path) and a ",l.a.createElement("a",{href:"https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#route-render-methods"},"render method")," (there are three render methods: ",l.a.createElement("code",null,"component"),", ",l.a.createElement("code",null,"render")," and ",l.a.createElement("code",null,"children"),")."),l.a.createElement("p",null,l.a.createElement("code",null,"Route")," component renders some UI with a render method passed as the props if the current URL matches ",l.a.createElement("code",null,"Route"),"'s props path."),l.a.createElement("p",null,l.a.createElement("code",null,"Route")," component passes to its render methods three props: ",l.a.createElement("code",null,"match"),", ",l.a.createElement("code",null,"location")," and ",l.a.createElement("code",null,"history")," (",l.a.createElement("a",{href:"https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#route-props"},"link"),")."),l.a.createElement("p",null,"When ",l.a.createElement("code",null,"component")," is used as a render method, ",l.a.createElement("code",null,"Route")," renders a new element each time when called."),l.a.createElement("p",null,l.a.createElement("code",null,"Route")," component inline rendering with render prop"))),l.a.createElement("p",null,"Dynamic routing with ",l.a.createElement("code",null,"match")))},N=function(){return l.a.createElement("p",null,"Page was not found.")},T=function(){return l.a.createElement("div",{className:"pt-4"},l.a.createElement(R.a,null,l.a.createElement(v.a,{exact:!0,path:"/",component:w}),l.a.createElement(v.a,{path:"/react-info",component:k}),l.a.createElement(v.a,{path:"/react-components",component:y}),l.a.createElement(v.a,{path:"/react-elements",component:S}),l.a.createElement(v.a,{path:"/react-jsx",component:x}),l.a.createElement(v.a,{path:"/create-react-app",component:j}),l.a.createElement(v.a,{path:"/react-router",component:J}),l.a.createElement(v.a,{path:"/es6-modules",component:I}),l.a.createElement(v.a,{path:"/webpack",component:C}),l.a.createElement(v.a,{component:N})))},W=a(84),O=a(16),A=a.n(O),L=a(11),M=a.n(L),X=function(){return l.a.createElement(A.a,{variant:"light",bg:"light",expand:"md",collapseOnSelect:!0,className:"align-items-start pt-4 min-height-100vh"},l.a.createElement(A.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(A.a.Collapse,{id:"responsive-navbar-nav",className:"flex-column"},l.a.createElement("p",{className:"font-weight-bold mb-0 align-self-start pt-3 pt-md-0 pl-md-2"},"Contents"),l.a.createElement(M.a,{className:"mr-auto flex-column"},l.a.createElement(M.a.Item,null,l.a.createElement(W.a,{exact:!0,to:"/",className:"nav-link"},"Intro")),l.a.createElement(M.a.Item,null,l.a.createElement(W.a,{to:"/react-info",className:"nav-link"},"React")),l.a.createElement(M.a.Item,null,l.a.createElement(W.a,{to:"/react-components",className:"nav-link"},"React Components")),l.a.createElement(M.a.Item,null,l.a.createElement(W.a,{to:"/react-elements",className:"nav-link"},"React Elements")),l.a.createElement(M.a.Item,null,l.a.createElement(W.a,{to:"/react-jsx",className:"nav-link"},"JSX")),l.a.createElement(M.a.Item,null,l.a.createElement(W.a,{to:"/create-react-app",className:"nav-link"},"Create React App")),l.a.createElement(M.a.Item,null,l.a.createElement(W.a,{to:"/react-router",className:"nav-link"},"React Router")),l.a.createElement(M.a.Item,null,l.a.createElement(W.a,{to:"/es6-modules",className:"nav-link"},"ES6 Modules")),l.a.createElement(M.a.Item,null,l.a.createElement(W.a,{to:"/webpack",className:"nav-link"},"Webpack")))))},B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(E.a,{className:"App"},l.a.createElement(f.a,null,l.a.createElement(g.a,{xs:12,md:4,className:"bg-light"},l.a.createElement(X,null)),l.a.createElement(g.a,{xs:12,md:8},l.a.createElement(T,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,2,1]]]);
//# sourceMappingURL=main.709a59b4.chunk.js.map