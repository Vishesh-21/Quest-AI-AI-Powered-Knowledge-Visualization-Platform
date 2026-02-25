import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home-page";
import { AuthPage } from "@/pages/user-auth";
import { ProtectedRoute, PublicRoute } from "./protected-routes";
import { PricingPage } from "@/pages/pricing-page";
import { NotesPage } from "@/pages/mynotes-page";
import { HistoryPage } from "@/pages/history-page";
import { GenerateNotes } from "@/pages/generate-notes";

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
        path="/pricing"
        element={
          <ProtectedRoute>
            <PricingPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-notes"
        element={
          <ProtectedRoute>
            <NotesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <HistoryPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/generate-notes"
        element={
          <ProtectedRoute>
            <GenerateNotes />
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
