import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import Information from "../pages/Information";
import Profile from "../pages/Profile/Profile";
import FAQ from "../pages/FAQ";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import { AuthContextProvider } from "../context/AuthContext";

const Router = () => (
  <AuthContextProvider>
    <BrowserRouter basename="/HacktoberFest">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Information} />
        <Route path="/faq" component={FAQ} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  </AuthContextProvider>
);

export default Router;
