import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useAuthContext } from "../../contexts/AuthContext";
import AuthButton from "../../components/AuthButton";

const Login = () => <AuthButton />;

  const onLoginButtonClick = () => {
    signin(() => {
      history.push("/profile");
    });
  };

  return (
    <div data-test="login-display">
      <Button
        id="login-button"
        size="large"
        variant="contained"
        color="primary"
        data-test="login-button"
        startIcon={<GitHubIcon />}
        onClick={onLoginButtonClick}
      >
        Login with Github
      </Button>
      <AuthButton />
    </div>
  );
};

export default Login;
