import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FormattedMessage } from "react-intl";
import { useAuthContext } from "../../contexts/AuthContext";
import authButtonData from "./authButtonData";

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
      <Typography variant="subtitle1">
        <FormattedMessage
          id={authButtonData.welcome.id}
          defaultMessage={authButtonData.welcome.defaultMessage}
        />
        !
      </Typography>
    </>
  ) : (
    <>
      <Typography variant="subtitle1">
        <FormattedMessage
          id={authButtonData.notLoggedIn.id}
          defaultMessage={authButtonData.notLoggedIn.defaultMessage}
        />
        .
      </Typography>
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
          <FormattedMessage
            id={authButtonData.loginWithGithub.id}
            defaultMessage={authButtonData.loginWithGithub.defaultMessage}
          />
        </Button>
      </Box>
    </>
  );
};

export default AuthButton;
