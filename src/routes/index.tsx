import React from "react";

import { Routes as RoutesDOM, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import ModulePage from "../pages/ModulePage";
import RoutePrivate from "./RoutePrivate";

const Routes: React.FC = () => {
  return (
    <RoutesDOM>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/modules"
        element={
          <RoutePrivate>
            <ModulePage />
          </RoutePrivate>
        }
      />
      <Route
        path="/home"
        element={
          <RoutePrivate>
            <Home />
          </RoutePrivate>
        }
      />
    </RoutesDOM>
  );
};

export default Routes;
