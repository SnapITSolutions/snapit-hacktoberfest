import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons/GitHub";
import { useAuthContext } from "../../contexts/AuthContext";

const AuthButton = () => {
  const history = useHistory();
  const { user, signin } = useAuthContext();

  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  }));

  const classes = useStyles();

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
      <div data-test="login-display">
        <Button
          id="login-button"
          size="small"
          variant="contained"
          color="primary"
          data-test="login-button"
          className={classes.button}
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
