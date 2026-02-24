import { CustomCard } from "../custom-card";
import { features } from "./feature-data";

export const AuthCards = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-2 mb-16"
    >
      {features.map((card, index) => (
        <CustomCard key={index} {...card} />
      ))}
    </div>
  );
};
