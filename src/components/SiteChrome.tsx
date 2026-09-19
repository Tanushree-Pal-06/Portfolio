import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { socialProfiles } from "@/data/portfolio";

const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Certifications", "Coding", "Contact"];


const profileLinks = {
  GitHub: "https://github.com/Tanushree-Pal-06",
  LinkedIn: "https://www.linkedin.com/in/tanushree-pal-142178308/",
  LeetCode: "https://leetcode.com/u/Tanushree_06/",
  GeeksforGeeks: "https://www.geeksforgeeks.org/profile/tanushreewoq0",
};

export function SiteHeader({ projectPage = false }: { projectPage?: boolean }) {
  const [open, setOpen] = useState(false);
  const hrefFor = (item: string) => projectPage ? `/#${item.toLowerCase()}` : `#${item.toLowerCase()}`;
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="font-display text-lg font-bold text-foreground" aria-label="Tanushree Pal home">TP<span className="text-accent">.</span></Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={hrefFor(item)} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">{item}</a>)}
        </nav>
        <button type="button" onClick={() => setOpen(!open)} className="inline-flex size-10 items-center justify-center border border-border text-foreground lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && <nav className="border-t border-border bg-surface px-5 py-5 lg:hidden" aria-label="Mobile navigation">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden border border-border bg-border">
          {navItems.map((item) => <a key={item} href={hrefFor(item)} onClick={() => setOpen(false)} className="bg-surface px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary">{item}</a>)}
        </div>
      </nav>}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-9 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="font-display text-xl font-bold text-foreground">Tanushree Pal</p><p className="mt-1 text-sm text-muted-foreground">Full Stack Developer</p></div>
        <div className="text-left sm:text-right">
          <div className="mb-3 flex flex-wrap gap-4 sm:justify-end">
  {socialProfiles.map((profile) => (
    <a
      key={profile}
      href={profileLinks[profile as keyof typeof profileLinks]}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
    >
      {profile}
    </a>
  ))}
</div><p className="text-xs text-muted-foreground">© 2026 Tanushree Pal</p></div>
      </div>
    </footer>
  );
}

export function SectionHeading({ index, title, note }: { index: string; title: string; note?: string }) {
  return <div className="mb-10 grid gap-4 border-t border-border pt-5 md:grid-cols-[8rem_1fr] md:items-start"><span className="font-mono text-lg text-accent">// {index}</span><div><h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>{note && <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{note}</p>}</div></div>;
}
