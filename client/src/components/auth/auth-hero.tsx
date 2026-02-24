import { SubHeading } from "@/components/sub-heading";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Badge } from "@/components/ui/badge";

export const AuthHero = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="relative w-full  flex flex-col items-center justify-center overflow-hidden bg-background py-16">
      {/* BACKGROUND EFFECTS */}
      {/* High-contrast static grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808025_1px,transparent_1px),linear-gradient(to_bottom,#80808025_1px,transparent_1px)] bg-size-[40px_40px] mask-radial-from-background" />

      {/* Soft Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-primary/10 blur-[120px] rounded-full z-0" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        <Badge
          variant="outline"
          className="py-2 absolute right-50 -top-5 text-muted-foreground px-4 border-primary/50"
        >
          <span className="font-sans font-semibold tracking-wide">
            ✨ AI Powered Knowledge Engine
          </span>
        </Badge>

        <div className="space-y-2 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter  leading-none italic font-serif text-primary">
            Think. Prompt. Visualize.
          </h1>

          <SubHeading>
            Quest-AI turns raw ideas into structured knowledge, intelligent
            notes, and visual insights —{" "}
            <span className="text-foreground font-bold">instantly.</span>
          </SubHeading>
        </div>

        <div className="flex flex-col items-center gap-8">
          <Button
            size="lg"
            onClick={handleClick}
            className="rounded-full mt-16 cursor-pointer"
          >
            <FcGoogle className="h-7 w-7" />
            <span className="tracking-tight">Continue with Google</span>
          </Button>

          <p className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.3em]">
            <span className="h-px w-12 bg-border" />
            Secure Enterprise Access
            <span className="h-px w-12 bg-border" />
          </p>
        </div>
      </div>
    </div>
  );
};
