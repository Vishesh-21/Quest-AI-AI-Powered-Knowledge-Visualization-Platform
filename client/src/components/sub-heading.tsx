import { cn } from "@/lib/utils";

//sub heading
export function SubHeading({
  children,
  className,
}: {
  children: string | React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "select-none text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0",
        className,
      )}
    >
      {children}
    </p>
  );
}
