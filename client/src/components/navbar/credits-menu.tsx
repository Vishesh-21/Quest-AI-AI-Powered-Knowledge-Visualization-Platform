import { Diamond, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedPopover } from "./animate-popover";

type CreditsMenuProps = {
  credits?: number;
};

export const CreditsMenu = ({ credits }: CreditsMenuProps) => {
  return (
    <AnimatedPopover
      trigger={
        <div>
          <PopOverTrigger credits={credits} />
        </div>
      }
    >
      <div>
        <h4 className="text-sm font-semibold">Low on credits?</h4>
        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
          Add more credits to continue generating AI notes and insights.
        </p>
        <Button
          size="sm"
          className="w-full mt-4 bg-background/80 transition-all duration-200 text-foreground hover:bg-background cursor-pointer"
        >
          Add Credits
        </Button>
      </div>
    </AnimatedPopover>
  );
};

const PopOverTrigger = ({ credits }: { credits?: number }) => {
  return (
    <div
      className="
            flex items-center gap-2
            px-4 py-2
            rounded-full
            border
            cursor-pointer
            transition-all
            hover:bg-muted/50
          "
    >
      <span className="flex items-center gap-1">
        <Diamond className="h-4 w-4 text-purple-400 fill-purple-400" />
        <span className="text-sm font-medium">{credits ?? 0}</span>
      </span>
      <PlusCircle className="h-5 w-5 text-foreground" />
    </div>
  );
};
