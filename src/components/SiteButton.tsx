import { Link } from "@tanstack/react-router";
import { ArrowRight, Github, Mail } from "lucide-react";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  icon?: "arrow" | "github" | "mail";
  href?: string;
  to?: "/projects/$slug" | "/";
  params?: { slug: "interviewforge" | "mindsync-ai" | "watchdog" };
  disabled?: boolean;
  ariaLabel?: string;
};

const styles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 border-primary",
  secondary: "bg-transparent text-foreground hover:bg-secondary border-border",
  quiet: "bg-transparent text-muted-foreground hover:text-foreground border-transparent px-0",
};

export function SiteButton({ children, variant = "primary", icon = "arrow", href, to, params, disabled, ariaLabel }: ButtonProps) {
  const Icon = icon === "github" ? Github : icon === "mail" ? Mail : ArrowRight;
  const className = `group inline-flex min-h-11 items-center justify-center gap-2 border px-5 py-2.5 text-sm font-semibold transition duration-300 ${styles[variant]} ${disabled ? "cursor-not-allowed opacity-45" : ""}`;
  const content = <>{children}<Icon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" /></>;

  if (to === "/projects/$slug" && params) return <Link to={to} params={params} className={className} aria-label={ariaLabel}>{content}</Link>;
  if (to === "/") return <Link to="/" hash="projects" className={className} aria-label={ariaLabel}>{content}</Link>;
  if (href && !disabled) return <a href={href} className={className} aria-label={ariaLabel}>{content}</a>;
  return <span className={className} aria-disabled="true" title="Link will be added later">{content}</span>;
}
