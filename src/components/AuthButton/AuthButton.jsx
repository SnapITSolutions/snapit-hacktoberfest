import React from "react";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Button, Typography } from "@mui/material";
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
      <Typography>
        <FormattedMessage
          id="AuthButton-login-message1"
          defaultMessage="Welcome!"
        />
      </Typography>
    </>
  ) : (
    <>
      <Typography textAlign="center">
        <FormattedMessage
          id="AuthButton-login-message2"
          defaultMessage="You are not logged in."
        />
      </Typography>
      <div data-test="auth-display">
        <Button
          id="auth-button"
          size="small"
          variant="contained"
          color="primary"
          textAlign="center"
          data-test="auth-button"
          startIcon={<GitHubIcon />}
          onClick={onLoginButtonClick}
        >
          <FormattedMessage
            id="AuthButton-text"
            defaultMessage="Login with Github"
          />
        </Button>
      </div>
    </>
  );
};

export default AuthButton;
