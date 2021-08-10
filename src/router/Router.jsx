import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import Information from "../pages/Information";
import Profile from "../pages/Profile/Profile";
import FAQ from "../pages/FAQ";
import Registration from "../pages/Registration";

const Router = () => (
  <BrowserRouter basename="/HacktoberFest">
    <Navigation />
    <Switch>
      <Route path="/" exact component={Information} />
      <Route path="/registration" component={Registration} />
      <Route path="/profile" component={Profile} />
      <Route path="/faq" component={FAQ} />
    </Switch>
  </BrowserRouter>
);

export default Router;
