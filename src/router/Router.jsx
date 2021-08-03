import React, { useState, useMemo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import Information from "../pages/Information";
import Profile from "../pages/Profile";
import FAQ from "../pages/FAQ";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import UserContext from "../hooks/UserContext";

const Router = () => {
  const [user, setUser] = useState({
    isAuthenticated: false,
  });
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <BrowserRouter basename="/HacktoberFest">
      <Navigation />
      <Switch>
        <UserContext.Provider value={userValue}>
          <Route path="/" exact component={Information} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/faq" component={FAQ} />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
