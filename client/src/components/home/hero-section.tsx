import { Button } from "@/components/ui/button";
import { Activity, ArrowRight } from "lucide-react";
import Heading from "../heading";
import { Badge } from "../ui/badge";

const points: string[] = [
  "Instantly generate structured and intelligent notes using AI.",
  "Automatically summarize and extract key insights from your content.",
  "Organize ideas effortlessly with smart categorization.",
  "Save time and focus on thinking — not formatting.",
];

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-background">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="flex flex-col space-y-6">
          <Badge className="text-sm font-md ">
            Create Notes with AI Powered Insights ✨
          </Badge>

          <div>
            <Heading className="text-shadow-xl font-thin" as="h3">
              Create Smart AI Notes <br />
              Effortlessly in Second with
            </Heading>
            <Heading className="tracking-wider font-extrabold bg-linear-to-r to-indigo-200 via-blue-500 from-pink-500 bg-clip-text text-transparent">
              QUEST-AI
            </Heading>
          </div>

          <div className=" text-muted-foreground text-md select-none">
            {points.map((point, index) => (
              <p className="flex items-center gap-2" key={index}>
                <Activity className="h-4 w-4" />
                {point}
              </p>
            ))}
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="group cursor-pointer">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="cursor-pointer" size="lg">
              Live Demo
            </Button>
          </div>
        </div>

         <div className="relative rounded-2xl border bg-card shadow-2xl p-2">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              alt="Dashboard Preview"
              className="rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
      </div>
    </section>
  );
};

export default HeroSection;


