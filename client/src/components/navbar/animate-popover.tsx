"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type AnimatedPopoverProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "start" | "center" | "end";
};

export const AnimatedPopover = ({
  trigger,
  children,
  align = "end",
}: AnimatedPopoverProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>

      <AnimatePresence>
        {open && (
          <PopoverContent
            asChild
            align={align}
            forceMount
            className="mt-3 border-none bg-foreground text-background shadow-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 50, filter: "blur(5px)" }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                w-64
                rounded-2xl
                backdrop-blur-xl
                p-5
                shadow-xl
              "
            >
              {children}
            </motion.div>
          </PopoverContent>
        )}
      </AnimatePresence>
    </Popover>
  );
};
