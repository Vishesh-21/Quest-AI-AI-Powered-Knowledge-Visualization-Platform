import { Container } from "@/components/contain";
import { AuthHero } from "./auth-hero";
import { FeatureGrid } from "./feature-grid";
import { toast } from "sonner";
import { loginWithGoogle } from "@/services/auth-services";

export const AuthLayout = () => {
  const handleGoogleAuth = async () => {
    try {
      const data = await loginWithGoogle();
      toast.success("Login successful!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Container className="py-10">
      <div className="relative flex items-center ">
        <div className="grid w-full gap-12 lg:grid-cols-2 items-center">
          <AuthHero handleClick={handleGoogleAuth} />
          <FeatureGrid />
        </div>
      </div>
    </Container>
  );
};
