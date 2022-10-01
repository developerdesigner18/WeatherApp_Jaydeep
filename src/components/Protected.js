import { Navigate } from "react-router-dom";
import React from "react";
export default function Protected({ children }) {
  let login = JSON.parse(localStorage.getItem("formdata"));

  if (!login) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}
