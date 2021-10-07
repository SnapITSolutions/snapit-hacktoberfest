import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useAuthContext } from "../../contexts/AuthContext";

const AuthButton = () => {
  const history = useHistory();
  const { user, signin } = useAuthContext();

  const onLoginButtonClick = () => {
    signin(() => {
      history.push("/profile");
    });
  };

  return user.isAuthenticated ? (
    <>
      <p>Welcome! </p>
    </>
  ) : (
    <>
      <p>You are not logged in.</p>
      <div data-test="auth-display">
        <Button
          id="auth-button"
          size="small"
          variant="contained"
          color="primary"
          data-test="auth-button"
          startIcon={<GitHubIcon />}
          onClick={onLoginButtonClick}
        >
          Login with Github
        </Button>
      </div>
    </>
  );
};

export default AuthButton;
