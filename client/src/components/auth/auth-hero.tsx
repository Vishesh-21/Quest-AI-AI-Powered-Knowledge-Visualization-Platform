import Heading from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Badge } from "@/components/ui/badge";

export const AuthHero = () => {
  return (
    <div className="space-y-8 text-center lg:text-left">
      <div className="space-y-4">
        {/* Badge */}
        <Badge
          variant="outline"
          className="rounded-full border-primary/30 bg-primary/5 text-primary"
        >
          ✨ AI Powered Knowledge Engine
        </Badge>

        <Heading as="h2" className="text-shadow-none">Think. Prompt. Visualize.</Heading>

        <SubHeading>
          Quest-AI turns raw ideas into structured knowledge, intelligent notes,
          and visual insights — instantly.
        </SubHeading>
      </div>

      <div className="w-full flex items-center md:items-start flex-col">
        <Button
          size="lg"
          className="
            h-12 px-6 rounded-md
            flex items-center gap-3
            text-sm font-medium
            shadow-sm
            transition-all
            hover:shadow-md
            cursor-pointer
          "
        >
          <FcGoogle className="h-5 w-5" />
          Continue with Google
        </Button>

        <p className="text-xs mt-2 text-muted-foreground">
          Secure authentication powered by Google
        </p>
      </div>
    </div>
  );
};
