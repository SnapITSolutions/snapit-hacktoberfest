import { useState } from "react";

const fakeAuth = {
  isAuthenticated: false,
  signin: (callback) => {
    fakeAuth.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout: (callback) => {
    fakeAuth.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

const useProvideAuth = () => {
  const [user, setUser] = useState({ isAuthenticated: false });

  const signin = (callback) =>
    fakeAuth.signin(() => {
      setUser({
        isAuthenticated: true,
      });
      callback();
    });

  const signout = (callback) =>
    fakeAuth.signout(() => {
      setUser({
        isAuthenticated: false,
      });
      callback();
    });

  return {
    user,
    signin,
    signout,
  };
};

export default useProvideAuth;
