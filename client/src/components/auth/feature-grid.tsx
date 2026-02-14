import { FeatureCard } from "./feature-card";
import { features } from "./feature-data";

export const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 auto-rows-[140px]">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          {...feature}
          index={index}
        />
      ))}
    </div>
  );
};
