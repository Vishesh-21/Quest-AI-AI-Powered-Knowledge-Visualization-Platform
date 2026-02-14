import { cn } from "@/lib/utils";
import React from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

const sizeMap = {
  h1: "text-5xl md:text-6xl",
  h2: "text-4xl md:text-5xl",
  h3: "text-3xl md:text-4xl",
  h4: "text-2xl md:text-3xl",
  h5: "text-xl",
  h6: "text-lg",
};

const Heading = ({ as: Tag = "h1", children, className }: HeadingProps) => {
  return (
    <Tag
      className={cn(
        "text-shadow-xs font-bold tracking-tight bg-linear-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent select-none",
        sizeMap[Tag],
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
