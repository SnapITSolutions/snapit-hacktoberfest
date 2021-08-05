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

  const signin = () =>
    fakeAuth.signin(() => {
      setUser({
        isAuthenticated: true,
      });
    });

  const signout = () =>
    fakeAuth.signout(() => {
      setUser({
        isAuthenticated: false,
      });
    });

  return {
    user,
    signin,
    signout,
  };
};

export default useProvideAuth;
