import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ToggleModeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        relative flex items-center justify-center
        h-9 w-9 rounded-md cursor-pointer
        border
        bg-transparent
        transition-all duration-300
        hover:bg-muted
        active:scale-95
      "
    >
      {/* Sun */}
      <Sun
        className="
          absolute h-4 w-4
          transition-all duration-300
          opacity-0 scale-75
          dark:opacity-100 dark:scale-100
        "
      />

      {/* Moon */}
      <Moon
        className="
          absolute h-4 w-4
          transition-all duration-300
          opacity-100 scale-100
          dark:opacity-0 dark:scale-75
        "
      />

      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
