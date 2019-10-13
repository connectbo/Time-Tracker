import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Timeline from "./components/timeline";
import Todo from "./components/todo";
import Activity from "./components/activity";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Timeline />, document.getElementById("timeline"));
ReactDOM.render(<Todo />, document.getElementById("todo"));
ReactDOM.render(<Activity />, document.getElementById("activity"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
