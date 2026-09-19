import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowDown, Image, Layers3 } from "lucide-react";
import { Footer, SiteHeader } from "@/components/SiteChrome";
import { SiteButton } from "@/components/SiteButton";
import { projects } from "@/data/portfolio";
import interviewforge1 from "@/assets/projects/interviewforge-1.png";
import interviewforge2 from "@/assets/projects/interviewforge-2.png";
import interviewforge3 from "@/assets/projects/interviewforge-3.png";
import watchdog1 from "@/assets/projects/watchdog-1.png";
import watchdog2 from "@/assets/projects/watchdog-2.png";
import watchdog3 from "@/assets/projects/watchdog-3.png";

import mindsync1 from "@/assets/projects/mindsync-ai-1.png";
import mindsync2 from "@/assets/projects/mindsync-ai-2.png";
import mindsync3 from "@/assets/projects/mindsync-ai-3.png";
const projectImages: Record<string, string[]> = {
  interviewforge: [
    interviewforge1,
    interviewforge2,
    interviewforge3,
  ],

  watchdog: [
    watchdog1,
    watchdog2,
    watchdog3,
  ],

  "mindsync-ai": [
    mindsync1,
    mindsync2,
    mindsync3,
  ],
};
export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Tanushree Pal` : "Project not found — Tanushree Pal";
    const description = loaderData?.description ?? "Portfolio project by Tanushree Pal.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const project = Route.useLoaderData();
  return <div className="min-h-screen overflow-x-clip bg-background text-foreground"><SiteHeader projectPage />
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-20 lg:px-12">
        <div className="flex items-center gap-3 font-mono text-xs text-accent"><span className="h-px w-10 bg-accent"/>PROJECT {project.number}</div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end"><div className="min-w-0">
  <p className="text-sm font-semibold uppercase text-primary">{project.subtitle}</p><h1 className="mt-4 break-words font-display text-[clamp(3rem,14vw,7rem)] font-bold leading-[.9]">{project.title}<span className="text-accent">.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{project.description}</p></div><dl className="border border-border bg-border"><div className="bg-surface p-5"><dt className="font-mono text-[10px] uppercase text-muted-foreground">My role</dt><dd className="mt-2 text-sm font-semibold">{project.role}</dd></div></dl></div>
        <a href="#overview" aria-label="Scroll to project overview" className="mt-14 inline-flex size-12 items-center justify-center border border-border text-primary transition hover:bg-secondary"><ArrowDown className="size-5"/></a>
      </section>

      <section id="overview" className="section-shell bg-surface"><div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr]"><div><span className="font-mono text-xs text-accent">// OVERVIEW</span><h2 className="mt-4 font-display text-3xl font-bold">What it does</h2></div><div className="space-y-6 text-lg leading-9 text-muted-foreground"><p>{project.overview}</p><p>{project.purpose}</p></div></div></section>

      <section className="section-shell"><div className="grid gap-12 lg:grid-cols-[1fr_1fr]"><div><span className="font-mono text-xs text-accent">// FUNCTIONALITY</span><h2 className="mt-4 font-display text-3xl font-bold">Key features</h2><ol className="mt-8 divide-y divide-border border-y border-border">{project.features.map((feature, index) => <li key={feature} className="flex gap-5 py-5"><span className="font-mono text-xs text-accent">0{index + 1}</span><span className="font-semibold">{feature}</span></li>)}</ol></div><div className="bg-secondary p-7 sm:p-9"><Layers3 className="size-8 text-primary"/><h2 className="mt-8 font-display text-3xl font-bold">My contribution</h2><p className="mt-5 leading-8 text-muted-foreground">{project.implementation}</p></div></div></section>

      <section className="section-shell bg-surface"><div className="grid gap-6 md:grid-cols-[.65fr_1.35fr]"><div><span className="font-mono text-xs text-accent">// TECHNOLOGY</span><h2 className="mt-4 font-display text-3xl font-bold">Built with</h2></div><div className="flex flex-wrap content-start gap-3">{project.stack.map((tech) => <span key={tech} className="border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground">{tech}</span>)}</div></div></section>

     <section className="section-shell">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="font-mono text-xs text-accent">// SCREENSHOTS</span>
          <h2 className="mt-4 font-display text-3xl font-bold">A closer look</h2>
        </div>

        <p className="max-w-sm text-sm leading-6 text-muted-foreground">
          A few screenshots from the project.
        </p>
      </div>

      <div className="grid snap-x snap-mandatory grid-flow-col auto-cols-[85%] gap-5 overflow-x-auto pb-4 sm:auto-cols-[55%] lg:auto-cols-[42%]">
        {(projectImages[project.slug] ?? []).map((image, index) => (
          <div
            key={image}
            className="group snap-start overflow-hidden border border-border bg-surface transition hover:border-primary"
          >
            <img
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              className="aspect-[16/10] h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </section>

      <section className="section-shell bg-secondary"><div className="flex flex-col justify-between gap-8 border-t border-border pt-9 sm:flex-row sm:items-center"><div><p className="font-mono text-xs text-accent"></p><h2 className="mt-3 font-display text-3xl font-bold">Explore more projects</h2></div><div className="flex flex-wrap gap-3">
        <SiteButton to="/">Back to Projects</SiteButton></div></div></section>
    </main><Footer /></div>;
}
