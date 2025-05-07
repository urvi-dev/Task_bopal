import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NonAuthLayout from "../Layouts/NonAuthLayout";
import VerticalLayout from "../Layouts/index";
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import { AuthProtected } from "./AuthProtected";
import { useProfile } from "@/Components/Hooks/UserHooks";
import Login from "@/pages/Authentication/Login";

const Index = () => {
  const { token } = useProfile();

  return (
    <Routes>
      <Route
        element={token ? <Navigate to="/" replace /> : <Login />}
        path="/login"
      />
      {publicRoutes.map((route, idx) => (
        <Route
          path={route.path}
          element={<NonAuthLayout>{route.component}</NonAuthLayout>}
          key={idx}
        />
      ))}

      {authProtectedRoutes.map((route, idx) => (
        <Route
          path={route.path}
          element={
            <AuthProtected>
              <VerticalLayout>{route.component}</VerticalLayout>
            </AuthProtected>
          }
          key={idx}
        />
      ))}

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default Index;
