import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const AuthButton = () => {
  const { user } = useAuthContext();

  return user.isAuthenticated ? (
    <p>Welcome! </p>
  ) : (
    <p>You are not logged in.</p>
  );
};

export default AuthButton;
