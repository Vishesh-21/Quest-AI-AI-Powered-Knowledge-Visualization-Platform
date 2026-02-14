import { Container } from "@/components/contain";
import { AuthHero } from "./auth-hero";
import { FeatureGrid } from "./feature-grid";

export const AuthLayout = () => {
  return (
    <Container className="py-10">
      <div className="relative flex items-center ">
        <div className="grid w-full gap-12 lg:grid-cols-2 items-center">
          <AuthHero />
          <FeatureGrid />
        </div>
      </div>
    </Container>
  );
};
