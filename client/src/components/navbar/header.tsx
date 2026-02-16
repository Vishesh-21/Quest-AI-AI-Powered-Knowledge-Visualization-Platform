import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ToggleModeButton } from "../toggle-mode";
import { Link } from "react-router-dom";
import Heading from "../heading";
import { useAppSelector } from "@/redux/hook";
import { CreditsMenu } from "./credits-menu";
import { UserMenu } from "./user-menu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { userData } = useAppSelector((state) => state.user);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 max-w-6xl mx-auto flex justify-center">
      <motion.header
        layout
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`
          flex py-2 px-3 items-center justify-between
          backdrop-blur-xl border-b border-border/40
          bg-linear-to-br from-background/50 to-transparent
          ${
            scrolled
              ? "w-[80%] max-w-6xl rounded-full border shadow-lg"
              : "w-full rounded-none"
          }
        `}
      >
        <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
        {/* Left: Logo */}
        <Logo />

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <ToggleModeButton />
          {userData && (
            <>
              <CreditsMenu credits={userData?.credits} />
              <UserMenu name={userData?.name} imageURL={userData?.imageURL} />
            </>
          )}
        </div>
      </motion.header>
    </div>
  );
}

export function Logo() {
  return (
    <Link to="/" className="flex items-center group">
      <img
        src="/logo.png"
        alt="Quest-AI Logo"
        loading="lazy"
        className="md:w-10 md:h-10 h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-105"
      />

      <Heading as="h4">uest-AI</Heading>
    </Link>
  );
}
