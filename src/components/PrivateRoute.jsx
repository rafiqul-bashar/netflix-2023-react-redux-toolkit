import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  // let user = false;
  if (!user?.uid) {
    return <Navigate to="/login" />;
  }
  return children;
}
