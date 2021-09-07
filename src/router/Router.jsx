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
import NotFound from "../pages/NotFound";

const Router = () => (
  <AuthContextProvider>
    <BrowserRouter basename="/HacktoberFest">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/information" component={Information} />
        <Route path="/faq" component={FAQ} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </AuthContextProvider>
);

export default Router;
