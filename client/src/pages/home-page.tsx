import { Container } from "@/components/contain";
import HeroSection from "@/components/home/hero-section";
import HeroFeatures from "@/components/home/home-cards";

export const HomePage = () => {
  return (
    <Container>
      <HeroSection />
      <HeroFeatures />
    </Container>
  );
};
