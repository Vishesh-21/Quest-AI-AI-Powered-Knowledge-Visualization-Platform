import { toast } from "sonner";
import { Button } from "../ui/button";
import { AnimatedPopover } from "./animate-popover";
import { UserAvatar } from "./user-avatar";
import {
  BadgeDollarSign,
  Home,
  LogOut,
  Notebook,
  Settings,
  Sparkle,
} from "lucide-react";
import { logout } from "@/services/apis";
import { useAppDispatch } from "@/redux/hook";
import { NavLink, useNavigate } from "react-router-dom";

type UserMenuProps = {
  name?: string;
  imageURL?: string;
};

const userMenuItems = [
  {
    label: "Home",
    icon: Home,
    to: "/",
  },
  {
    label: "Generate Notes",
    icon: Sparkle,
    to: "/generate-notes",
  },
  {
    label: "My Notes",
    icon: Notebook,
    to: "/my-notes",
  },
  {
    label: "History",
    icon: Settings,
    to: "/history",
  },
  {
    label: "Pricing",
    icon: BadgeDollarSign,
    to: "/pricing",
  },
];

export const UserMenu = ({ name, imageURL }: UserMenuProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //function to handle logout
  const handleLogout = async () => {
    try {
      const data = await logout(dispatch);
      toast.success(data?.message);
      navigate("/auth");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <AnimatedPopover
      trigger={
        <div>
          <UserAvatar name={name} imageURL={imageURL} />
        </div>
      }
    >
      <div className="space-y-3">
        <div>
          <p className="text-sm font-semibold">Hey👋, {name}</p>
        </div>

        <div className="border-t border-background pt-3 space-y-2 text-sm">
          {userMenuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `
                flex items-center gap-2
                px-3 py-2 
                transition-all duration-300
                group
                ${
                  isActive
                    ? "text-white bg-amber-700 hover:bg-amber-600"
                    : "text-muted-foreground hover:bg-muted/10 hover:text-background"
                }
              `
              }
            >
              <item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>{item.label}</span>
            </NavLink>
          ))}

          <Button
            className="w-full rounded-none cursor-pointer group"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Log out
          </Button>
        </div>
      </div>
    </AnimatedPopover>
  );
};
