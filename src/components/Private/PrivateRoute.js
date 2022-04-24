import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateRoute({ element: component, ...rest }) {
  let navigate = useNavigate();
  return localStorage?.login ? <Outlet /> : navigate("/login");
}
