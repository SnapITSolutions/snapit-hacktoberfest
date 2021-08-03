import React, { useContext } from "react";
import // useHistory,
// useLocation
"react-router-dom";
import UserContext from "../../hooks/UserContext";
// import PrivateRoute from "../../router/PrivateRoute";

const Login = () => {
  // const history = useHistory();
  // const location = useLocation();
  const { user, setUser } = useContext(UserContext);

  const login = user.isAuthenticated ? setUser(user) : null;
  // user.isAuthenticated = true;
  //     setUser(user);

  return (
    <div>
      <button type="submit" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;
