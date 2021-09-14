import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useAuthContext } from "../../contexts/AuthContext";

const AuthButton = () => {
  const history = useHistory();
  const { user, signout } = useAuthContext();

  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  }));

  const classes = useStyles();

  return user.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <Button
        size="small"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => {
          signout(() => history.push("/"));
        }}
      >
        Sign out
      </Button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
};

export default AuthButton;
