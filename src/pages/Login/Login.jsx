import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import AuthButton from "./AuthButton";

const Login = () => {
  const history = useHistory();
  const { signin } = useAuthContext();

  const onLoginButtonClick = () => {
    signin(() => {
      history.push("/profile");
    });
  };

  return (
    <div data-test="login-display">
      <button
        data-test="login-button"
        type="button"
        onClick={onLoginButtonClick}
      >
        Login
      </button>
      <AuthButton />
    </div>
  );
};

export default Login;
