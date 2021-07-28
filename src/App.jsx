import React from "react";
import Router from "./router/Router";
import { Context } from "./components/Wrapper";

const App = () => (
  <div className="App" data-test="component-app">
    <Router data-test="router" />
  </div>
);

export default App;
