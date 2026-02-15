import { TextLoader } from "@/components/loading";
import { useAppSelector } from "@/redux/hook";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { userData, loading } = useAppSelector((state) => state.user);

  console.log(userData);

  if (loading) return <TextLoader />;

  // if not logged in then redirect to login
  if (!userData) return <Navigate to="/auth" />;

  // if logged in then return children
  return <>{children}</>;
};
