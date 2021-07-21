import React from "react";
import Information from "./pages/Information";
import Navigation from "./pages/Navigation/Navigation";
import Router from "./router/Router";

const App = () => (
  <div className="App" data-test="component-app">
    <Router />
    <Navigation />
    <Information />
  </div>
);

export default App;
