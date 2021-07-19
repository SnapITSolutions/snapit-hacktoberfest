import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import Information from "../Pages/Information";
import Profile from "../Pages/Profile";
import FAQ from "../Pages/FAQ";
import Registration from "../Pages/Registration";

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
