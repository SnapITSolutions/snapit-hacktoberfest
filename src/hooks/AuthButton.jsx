import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const AuthButton = () => {
  const history = useHistory();
  const { user, signout } = useAuthContext();

  return user ? (
    <p>
      Welcome!{" "}
      <button
        type="submit"
        onClick={() => {
          signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
};

export default AuthButton;
