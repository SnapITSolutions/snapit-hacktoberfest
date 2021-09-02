import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import Information from "../pages/Information";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import FAQ from "../pages/FAQ";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import { AuthContextProvider } from "../context/AuthContext";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const Router = () => (
  <AuthContextProvider>
    <BrowserRouter basename="/HacktoberFest">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/information" exact component={Information} />
        <Route path="/faq" exact component={FAQ} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </AuthContextProvider>
);

export default Router;
