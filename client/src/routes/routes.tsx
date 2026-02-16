import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home-page";
import { AuthPage } from "@/pages/user-auth";
import { ProtectedRoute, PublicRoute } from "./protected-routes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/auth"
        element={
          <PublicRoute>
            <AuthPage />
          </PublicRoute>
        }
      />
    </Routes>
  );
};
