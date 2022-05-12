import React, { ReactNode } from "react";

import { Navigate } from "react-router-dom";

interface IRoutePrivate {
  children: JSX.Element;
}

const RoutePrivate: React.FC<IRoutePrivate> = ({ children }) => {
  const user = localStorage.getItem("@redux:user");

  if (!user) return <Navigate to="/" />;

  return children;
};

export default RoutePrivate;
