import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextAuth } from "../ContextApi/ContextAuth";

const RequireAuth = ({ children }) => {
  const { currentUser } = useContext(ContextAuth);
  if (!currentUser) {
    return <Navigate to="/Login"></Navigate>;
  }
  return children;
};

export default RequireAuth;
