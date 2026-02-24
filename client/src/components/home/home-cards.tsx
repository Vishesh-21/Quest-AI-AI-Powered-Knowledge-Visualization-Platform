"use client";

import {
  FileText,
  GraduationCap,
  Briefcase,
  Download,
  FolderKanban,
  Brain,
} from "lucide-react";
import Heading from "../heading";
import { CustomCard } from "../custom-card";

const cards = [
  {
    title: "Exam Notes",
    description: "Generate structured and revision-ready notes instantly.",
    icon: GraduationCap,
  },
  {
    title: "Interview Notes",
    description: "Prepare smart summaries for technical & HR interviews.",
    icon: Briefcase,
  },
  {
    title: "Diagram Notes",
    description: "Convert complex topics into visual explanations.",
    icon: Brain,
  },
  {
    title: "PDF Export",
    description: "Download AI-generated notes in clean PDF format.",
    icon: Download,
  },
  {
    title: "Project Notes",
    description: "Organize project research into actionable insights.",
    icon: FolderKanban,
  },
  {
    title: "Quick Summaries",
    description: "Turn long content into crisp, digestible summaries.",
    icon: FileText,
  },
];

const HeroFeatures = () => {
  return (
    <section className="relative w-full pt-18 pb-10 ">
      <div className="container mx-auto px-6 space-y-14">
        <div className="text-center space-y-4">
          <Heading as="h2" className="text-4xl font-bold tracking-tight">
            Powerful AI Note Features
          </Heading>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Intelligent tools built to generate, organize, and export notes with
            clarity and precision.
          </p>
        </div>

        {/* Premium Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-2 border border-primary/20 p-2 rounded-xl"
        >
          {cards.map((card, index) => (
            <CustomCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroFeatures;
