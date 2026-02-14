import { cn } from "@/lib/utils";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("mx-auto max-w-5xl md:px-4 px-2", className)}>
      {children}
    </div>
  );
};
