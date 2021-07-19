import React from "react";
import "../App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Information from "../Pages/Information";
import Profile from "../Pages/Profile";
import FAQ from "../Pages/FAQ";
import Registration from "../Pages/Registration";

function App() {
  return (
    <BrowserRouter basename="/HacktoberFest">
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/" exact component={Information} />
        <Route path="/registration" component={Registration} />
        <Route path="/profile" component={Profile} />
        <Route path="/faq" component={FAQ} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
