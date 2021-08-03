import React, { createContext, useContext } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import UserContext from "./UserContext";

const Auth = () => (
  // <ProvideAuth>
  <Router>
    <div>
      <AuthButton />
    </div>
  </Router>
  // </ProvideAuth>
);

const fakeAuth = {
  isAuthenticated: false,
  signin: (cb) => {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout: (cb) => {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

export const useAuth = () => useContext(authContext);

export const useProvideAuth = () => {
  // const [user, setUser] = useState(null);
  const { setUser } = useContext(UserContext);

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
    signin,
    signout,
  };
};

const AuthButton = () => {
  const history = useHistory();
  const auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        type="submit"
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
};

export default Auth;
