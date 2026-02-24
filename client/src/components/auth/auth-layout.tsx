import { Container } from "@/components/contain";
import { AuthHero } from "./auth-hero";
import { toast } from "sonner";
import { loginWithGoogle } from "@/services/auth-services";
import { useAppDispatch } from "@/redux/hook";
import { setUserData } from "@/redux/slices/user-slice";
import { useNavigate } from "react-router-dom";
import { AuthCards } from "./feature-card";

export const AuthLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleGoogleAuth = async () => {
    try {
      const data = await loginWithGoogle();
      dispatch(setUserData(data.user));
      navigate("/");
      toast.success("Login successful!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Container>
          <AuthHero handleClick={handleGoogleAuth} />
          <AuthCards />
    </Container>
  );
};
