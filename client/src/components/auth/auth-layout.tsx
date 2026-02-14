import { Container } from "@/components/contain";
import { AuthHero } from "./auth-hero";
import { FeatureGrid } from "./feature-grid";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/utils/firebase";
import { toast } from "sonner";

export const AuthLayout = () => {
  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      const { displayName: name, email, photoURL } = user;
      console.log(name, email, photoURL);
      toast.success("Login successful!");
    } catch (error) {
      console.log(error);
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
