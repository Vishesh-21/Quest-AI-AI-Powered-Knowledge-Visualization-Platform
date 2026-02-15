"use client";

import { motion } from "motion/react";
import { Container } from "./contain";

type BeamTextLoaderProps = {
  text?: string;
};

export const TextLoader = ({
  text = "Loading...",
}: BeamTextLoaderProps) => {
  const letters = text.split("");

  return (
    <Container className="relative flex min-h-[50vh] items-center justify-center">
      {/* Animated Text */}
      <div className="flex">
        {letters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
            className="text-8xl font-bold tracking-wider text-foreground"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    </Container>
  );
};
