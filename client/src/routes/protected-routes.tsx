import { TextLoader } from "@/components/loading";
import { useAppSelector } from "@/redux/hook";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { userData, loading } = useAppSelector((state) => state.user);
  if (loading) return <TextLoader />;

  // if not logged in then redirect to login
  if (!userData) return <Navigate to="/auth" replace />;

  // if logged in then return children
  return <>{children}</>;
};

export const PublicRoute = ({ children }: ProtectedRouteProps) => {
  const { userData, loading } = useAppSelector((state) => state.user);
  if (loading) return <TextLoader />;

  // If logged in → block auth page
  if (userData) return <Navigate to="/" replace />;

  return <>{children}</>;
};
