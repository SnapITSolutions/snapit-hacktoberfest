import React from "react";
import Router from "./router/Router";

const App = () => (
  <div className="App" data-test="component-app">
    <Router data-test="router" />
  </div>
);

export default App;
