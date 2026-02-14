import { cn } from "@/lib/utils";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("mx-auto max-w-6xl md:px-2 px-2 mt-24", className)}>
      {children}
    </div>
  );
};
