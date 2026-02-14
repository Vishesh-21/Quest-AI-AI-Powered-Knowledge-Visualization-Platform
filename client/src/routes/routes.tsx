import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home-page";
import { AuthPage } from "@/pages/user-auth";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
};
