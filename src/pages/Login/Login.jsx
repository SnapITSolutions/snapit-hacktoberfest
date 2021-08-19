import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useAuthContext } from "../../context/AuthContext";
import AuthButton from "./AuthButton";

const Login = () => {
  const history = useHistory();
  const { signin } = useAuthContext();

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

  return (
    <div data-test="login-display">
      <ButtonBase className={classes.image}>
        <Button
          href="#"
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
      </ButtonBase>
      <AuthButton />
    </div>
  );
};

export default Login;
