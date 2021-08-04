import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { signin } = useAuthContext();

  const { from } = location.state || { from: { pathname: "/" } };
  const onLoginButtonClick = () => {
    signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <button type="button" onClick={onLoginButtonClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
