//? === TEMPLATE IMPORTS ===
import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";

//? === IMPORT CSS AND APP ===
import "./index.css";
import App from "./App";

//? === TEMPLATE INDEX.JS ===
ReactDOM.render(
    <BrowserRouter basename={"/tf-jsx-demo/rosy/"}>
        <Route path="/" component={App} />
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();

//! === ORIGINAL INDEX IMPORTS ===
//import React from "react";
// import ReactDOM from "react-dom";
// //import "./index.css";
// import App from "./App";
// import * as serviceWorker from './serviceWorker';
// import { Route, Switch } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

//! === ORIGINAL INDEX.JS FILE ===
// ReactDOM.render(
//     <BrowserRouter>
//      <Switch>
//       <Route path="/" component={App} />
//      </Switch>
//     </BrowserRouter>,
//     document.getElementById("root")
//    );
//    // If you want your app to work offline and load faster, you can change
//    // unregister() to register() below. Note this comes with some pitfalls.
//    // Learn more about service workers: https://bit.ly/CRA-PWA
//    serviceWorker.unregister();

