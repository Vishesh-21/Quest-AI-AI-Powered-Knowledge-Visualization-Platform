import { Container } from "@/components/contain";
import { QuestHero } from "@/components/home/hero-section";
import HeroFeatures from "@/components/home/home-cards";
export const HomePage = () => {
  return (
    <Container>
      <QuestHero />
      <HeroFeatures />
    </Container>
  );
};
