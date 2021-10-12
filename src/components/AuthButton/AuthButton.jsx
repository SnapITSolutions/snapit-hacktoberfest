import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
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
      <Typography variant="subtitle1">Welcome!</Typography>
    </>
  ) : (
    <>
      <Typography variant="subtitle1">You are not logged in.</Typography>
      <Box data-test="auth-display">
        <Button
          id="auth-button"
          size="small"
          variant="contained"
          color="secondary"
          data-test="auth-button"
          startIcon={<GitHubIcon />}
          onClick={onLoginButtonClick}
        >
          Login with Github
        </Button>
      </Box>
    </>
  );
};

export default AuthButton;
