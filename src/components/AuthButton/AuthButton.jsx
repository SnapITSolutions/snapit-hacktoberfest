import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
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
    <p>You are not logged in.</p>
  );
};

export default AuthButton;
