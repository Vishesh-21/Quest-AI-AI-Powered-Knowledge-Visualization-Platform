"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: any;
  title: string;
  description: string;
  large?: boolean;
  index: number;
};

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  large,
  index,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      className={cn(large && "col-span-2")}
    >
      <Card
        className="
          group
          h-full
          border-border/90
          backdrop-blur-xl
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        <CardContent className=" flex flex-col justify-between h-full">
          <div className="flex items-center gap-3">
            <div
              className="
                h-10 w-10
                rounded-xl
                bg-muted
                flex items-center justify-center
                transition-transform
                group-hover:scale-105
              "
            >
              <Icon className="h-5 w-5 text-foreground" />
            </div>

            <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
          </div>

          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
