import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuthContext } from "../../contexts/AuthContext";

const AuthButton = () => {
  const history = useHistory();
  const { user, signout } = useAuthContext();

  return user.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <Button
        size="large"
        variant="contained"
        color="secondary"
        onClick={() => {
          signout(() => history.push("/"));
        }}
      >
        Sign out
      </Button>
    </p>
  ) : (
    <Typography textAlign="center" mt={3}>
      You are not logged in.
    </Typography>
  );
};

export default AuthButton;
