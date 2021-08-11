import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import AuthButton from "../../components/AuthButton";

const Login = () => {
  const history = useHistory();
  // const location = useLocation();
  const { signin } = useAuthContext();
  // const { from } = location.state || { from: { pathname: "/profile" } };

  const onLoginButtonClick = () => {
    signin(() => {
      history.push("/profile");
    });
  };

  return (
    <div data-test="login-button-display">
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
