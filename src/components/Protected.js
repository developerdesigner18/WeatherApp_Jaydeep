import { Navigate, useNavigate } from "react-router-dom";
import React, { Children } from "react";
export default function Protected({ children }) {
  const navigate = useNavigate();
  let login = localStorage.getItem("formdata");

  if (!login) {
    return <Navigate to="/" replace />;
  }
  return children;
}
