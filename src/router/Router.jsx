import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Information from "../pages/Information";
import Profile from "../pages/Profile";
import FAQ from "../pages/FAQ";
import Registration from "../pages/Registration";

const Router = () => (
  <BrowserRouter basename="/HacktoberFest">
    <div className="App">
      <NavBar />
    </div>
    <Switch>
      <Route path="/" exact component={Information} />
      <Route path="/registration" component={Registration} />
      <Route path="/profile" component={Profile} />
      <Route path="/faq" component={FAQ} />
    </Switch>
  </BrowserRouter>
);

export default Router;
