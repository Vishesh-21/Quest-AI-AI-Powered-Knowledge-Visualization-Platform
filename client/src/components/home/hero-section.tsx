import React from "react";
import { motion } from "motion/react";
import { SubHeading } from "@/components/sub-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Heading from "../heading";
import {
  Sparkles,
  BrainCircuit,
  Zap,
  Search,
  Layers,
  CheckCircle2,
  Calendar,
} from "lucide-react";

// --- Floating Element Component ---
const FloatingElement = ({
  children,
  className,
  delay = 0,
  duration = 6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -20, 0] }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute z-20 transition-all duration-500 hover:scale-110 group ${className} duration-200`}
  >
    <div className="relative p-4 rounded-2xl bg-background/40 backdrop-blur-md border border-white/10  shadow-2xl group-hover:border-muted-foreground/30 group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] transition-all">
      {children}
    </div>
  </motion.div>
);

export const QuestHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background py-6 ">
      {/* 1. PREMIUM GRID & GRADIENT BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* 2. FLOATING ELEMENTS (Reference inspired) */}
      {/* Top Left: Sticky Note Style */}
      <FloatingElement
        className="top-[30%] left-[5%] -rotate-6 hidden lg:block"
        delay={0.5}
      >
        <div className="w-32 text-[10px] text-muted-foreground font-medium leading-tight">
          <div className="w-8 h-8 bg-yellow-200/20 rounded-full mb-2 flex items-center justify-center">
            📌
          </div>
          Take notes to keep track of crucial details.
        </div>
      </FloatingElement>

      {/* Top Right: Reminders Card */}
      <FloatingElement
        className="top-[10%] right-[12%] rotate-3 hidden md:block"
        delay={1.2}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
            <Calendar size={20} />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase opacity-50">Today</p>
            <p className="text-xs font-semibold text-foreground">
              Marketing Sync
            </p>
          </div>
        </div>
      </FloatingElement>

      {/* Bottom Left: Progress Card */}
      <FloatingElement
        className="bottom-[20%] left-[10%] -rotate-3 hidden lg:block"
        duration={5}
      >
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] mb-1">
            <span>Building Graph</span>
            <span>80%</span>
          </div>
          <div className="w-32 h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
              transition={{ duration: 2, delay: 1 }}
              className="h-full bg-primary"
            />
          </div>
        </div>
      </FloatingElement>

      {/* Bottom Right: Floating Icon with Badge */}
      <FloatingElement
        className="bottom-[50%] right-[5%] rotate-12"
        delay={0.8}
        duration={7}
      >
        <div className="flex gap-2">
          <div className="p-2 bg-primary/10 rounded-xl">
            <Zap size={20} className="text-primary fill-primary/20" />
          </div>
          <div className="p-2 bg-background/50 rounded-xl border border-white/5">
            <CheckCircle2 size={20} className="text-green-500" />
          </div>
        </div>
      </FloatingElement>

      {/* 3. CENTER CONTENT */}
      <div className="relative z-10   mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-14 left-30"
        >
          <Badge
            variant="outline"
            className="mb-3 px-4 py-1.5 border-primary/20 bg-primary/5 text-primary text-sm backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 mr-2 fill-yellow-400 text-yellow-400" />
            Next-Gen AI Study System
          </Badge>
        </motion.div>

        <Heading className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.8] mb-6">
          Build <span className="relative text-foreground/40">Knowledge</span>
          <br />
          <span className="text-primary text-7xl italic font-serif">
            Not Just Notes.
          </span>
        </Heading>

        <SubHeading className="max-w-2xl text-lg md:text-xl text-muted-foreground/80">
          Quest-AI transforms your prompts into structured intelligence,
          connected concepts, and visual graphs —{" "}
          <span className="text-foreground font-medium">
            instantly and beautifully.
          </span>
        </SubHeading>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            {/* THE OUTER GLOW (appears on hover) */}
            <div className="absolute -inset-0.5 bg-linear-to-r from-red-600 via-blue-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500" />

            <Button
              size="lg"
              className="relative rounded-full px-10 h-12 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 text-lg font-medium flex items-center gap-2 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Get Started</span>

              <div className="relative z-10 flex items-center justify-center">
                <Zap className="w-4 h-4 fill-current transition-transform duration-200 group-hover:rotate-25 group-hover:scale-125" />
              </div>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex flex-wrap justify-center gap-8 text-muted-foreground "
        >
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase">
            <Layers size={16} /> Structured
          </div>
          <div className="flex items-center gap-2 text-xs  tracking-widest uppercase">
            <BrainCircuit size={16} /> Graph Powered
          </div>
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase">
            <Search size={16} /> Instant Clarity
          </div>
        </motion.div>
      </div>
    </section>
  );
};
