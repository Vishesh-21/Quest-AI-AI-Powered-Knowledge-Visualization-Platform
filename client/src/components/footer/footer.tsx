import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../contain";

/* ----------------------------- */
/* Data Configuration */
/* ----------------------------- */

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", to: "#" },
      { label: "Pricing", to: "#" },
      { label: "Integrations", to: "#" },
      { label: "Updates", to: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", to: "#" },
      { label: "API", to: "#" },
      { label: "Support", to: "#" },
      { label: "Community", to: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Github, to: "#" },
  { icon: Twitter, to: "#" },
  { icon: Linkedin, to: "#" },
];

/* ----------------------------- */
/* Reusable Sub Components */
/* ----------------------------- */

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) => (
  <div className="space-y-3">
    <h4 className="text-sm font-medium">{title}</h4>
    <ul className="space-y-2 text-sm text-muted-foreground">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.to}
            className="hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink = ({ icon: Icon, to }: { icon: any; to: string }) => (
  <Link
    to={to}
    className="text-muted-foreground duration-300 hover:-translate-y-1 hover:text-foreground transition-all"
  >
    <Icon className="h-4 w-4" />
  </Link>
);

/* ----------------------------- */
/* Main Footer Component */
/* ----------------------------- */

export const Footer = () => {
  return (
    <footer className="relative mt-10 border-t border-border/40">
      {/* Top Gradient Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 col-span-2">
            <h3 className="text-lg font-semibold tracking-tight">Quest AI</h3>
            <p className="text-sm text-muted-foreground w-[90%] leading-relaxed">
              Transform ideas into structured knowledge, intelligent notes, and
              visual insights — instantly.
            </p>

            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <SocialLink key={index} {...social} />
              ))}
            </div>
          </div>

          {/* Dynamic Sections */}
          {footerSections.map((section) => (
            <FooterSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Quest AI. All rights reserved.</p>
          <p>Built with AI ✨</p>
        </div>
      </div>
    </footer>
  );
};
