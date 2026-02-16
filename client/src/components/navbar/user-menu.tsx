import { toast } from "sonner";
import { Button } from "../ui/button";
import { AnimatedPopover } from "./animate-popover";
import { UserAvatar } from "./user-avatar";
import { LogOut, Settings, User } from "lucide-react";
import { logout } from "@/services/apis";
import { useAppDispatch } from "@/redux/hook";
import { useNavigate } from "react-router-dom";

type UserMenuProps = {
  name?: string;
  imageURL?: string;
};

const userMenuItems = [
  {
    label: "Profile",
    icon: User,
  },
  {
    label: "History",
    icon: Settings,
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
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">Manage your account</p>
        </div>

        <div className="border-t border-background pt-3 space-y-2 text-sm">
          {userMenuItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center flex-row justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2 text-muted-foreground hover:text-background transition-all duration-300 hover:ml-1 active:scale-95 py-2 w-full hover:bg-background/10 rounded-1 px-2">
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
            </div>
          ))}

          <Button
            className="w-full cursor-pointer bg-amber-700 hover:bg-amber-600 text-white"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2 " />
            Log out
          </Button>
        </div>
      </div>
    </AnimatedPopover>
  );
};
