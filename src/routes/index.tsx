import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Braces, Code2, MapPin } from "lucide-react";
import { Footer, SectionHeading, SiteHeader } from "@/components/SiteChrome";
import { SiteButton } from "@/components/SiteButton";
import { projects, skillGroups, socialProfiles } from "@/data/portfolio";
import badge10Days from "@/assets/leetcode-10-days.png";
import badge50Days from "@/assets/leetcode-50-days.png";
import badge100Days from "@/assets/leetcode-100-days.png";
import profilePhoto from "@/assets/profile-photo.jpg";

const profileLinks = {
  GitHub: "https://github.com/Tanushree-Pal-06",
  LinkedIn: "https://www.linkedin.com/in/tanushree-pal-142178308/",
  LeetCode: "https://leetcode.com/u/Tanushree_06/",
  GeeksforGeeks: "https://www.geeksforgeeks.org/profile/tanushreewoq0",
};

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Tanushree Pal — Full Stack Developer" },
    { name: "description", content: "Portfolio of Tanushree Pal, a full stack developer and CSE (AI & ML) student building practical web applications and backend systems." },
    { property: "og:title", content: "Tanushree Pal — Full Stack Developer" },
    { property: "og:description", content: "Explore Tanushree Pal's full stack projects, experience, skills, and education." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: PortfolioPage,
});

function PortfolioPage() {
  return <div className="min-h-screen overflow-x-clip bg-background text-foreground"><SiteHeader />
    <main>
      <section id="home" className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-16 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1.12fr_.88fr] lg:px-12">
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3 font-mono text-xs text-accent"><span className="h-px w-10 bg-accent" />// HELLO, I’M</div>
          <h1 className="font-display text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[.88] text-foreground">Tanushree<br/><span className="text-primary">Pal</span><span className="text-accent">.</span></h1>
          <p className="mt-7 text-base font-semibold text-foreground sm:text-lg">Full Stack Developer <span className="text-muted-foreground">|</span> Python <span className="text-muted-foreground">|</span> MERN Stack</p>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">BTech CSE (AI & ML) student who enjoys building web applications, working on backend systems, and solving real-world problems through technology.</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground"><span>CSE (AI & ML)</span><span className="text-accent">•</span><span>2023–2027</span><span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5 text-accent"/>Indore, India</span></div>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#projects" className="group inline-flex min-h-11 items-center gap-2 border border-primary bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">View Projects <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5"/></a><a href="#contact" className="group inline-flex min-h-11 items-center gap-2 border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-secondary">Get In Touch <ArrowUpRight className="size-4"/></a></div>
        </div>
        <div className="relative mx-auto w-full max-w-md px-5 pb-5 pt-3 lg:ml-auto">
          <div className="absolute right-0 top-0 font-mono text-5xl text-primary/20">01</div><div className="absolute bottom-0 left-0 h-[72%] w-[76%] border border-accent/55" />
          <div className="relative aspect-[4/5] overflow-hidden border border-primary/60 bg-surface shadow-editorial">
            <img
              src={profilePhoto}
              alt="Tanushree Pal"
              className="absolute inset-5 h-[calc(100%-2.5rem)] w-[calc(100%-2.5rem)] object-cover"
            />
            <span className="absolute bottom-3 right-4 font-mono text-xs text-accent"></span>
          </div><div className="absolute -right-1 bottom-16 h-16 w-2 bg-accent" />
        </div>
      </section>

      <section id="about" className="section-shell bg-surface"><SectionHeading index="02" title="About Me" />
        <div className="grid gap-10 md:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)]"><div className="font-display text-2xl font-semibold leading-snug text-primary">Building across the stack,<br/>with purpose in every layer.</div><div className="space-y-5 text-base leading-8 text-muted-foreground"><p>I’m a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Acropolis Institute of Technology and Research, Indore.</p><p>My primary interests are full-stack development, backend development, and building practical applications using modern web technologies. I enjoy understanding how different parts of an application work together, from designing APIs and working with databases to building user-facing interfaces.</p><p>I also enjoy exploring AI-based features and integrating them into applications where they add practical value.</p></div></div>
      </section>

      <section id="skills" className="section-shell"><SectionHeading index="03" title="Skills & Toolkit" note="A focused technical foundation for building practical, end-to-end applications." />
        <div className="divide-y divide-border border-y border-border">{skillGroups.map((group) => <div key={group.title} className="grid gap-4 py-6 md:grid-cols-[5rem_minmax(13rem,.8fr)_1.5fr] md:items-start"><span className="font-mono text-xs text-accent">{group.number}</span><h3 className="text-sm font-bold uppercase text-foreground">{group.title}</h3><div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="border border-border bg-surface px-3 py-1.5 text-sm text-muted-foreground transition hover:border-primary hover:text-foreground">{item}</span>)}</div></div>)}</div>
      </section>

      <section id="projects" className="section-shell bg-surface"><SectionHeading index="04" title="Selected Projects" note="Three applications shaped by backend thinking, practical AI integration, and user-focused development." />
        <div className="space-y-0 border-y border-border">{projects.map((project, idx) => <article key={project.slug} className="group grid gap-7 border-b border-border py-9 last:border-b-0 lg:grid-cols-[5rem_1fr_1fr]">
          <span className="font-mono text-sm text-accent">{project.number}</span><div><p className="mb-2 text-xs font-semibold uppercase text-primary">{project.subtitle}</p><h3 className="font-display text-3xl font-bold text-foreground transition-colors group-hover:text-primary sm:text-4xl">{project.title}</h3><p className="mt-4 max-w-xl leading-7 text-muted-foreground">{project.description}</p></div>
          <div className="flex flex-col justify-between gap-7 lg:border-l lg:border-border lg:pl-8"><dl className="text-sm"><div><dt className="mb-1 font-mono text-[11px] uppercase text-muted-foreground">Role</dt><dd className="font-semibold text-foreground">{project.role}</dd></div></dl><div className="flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="font-mono text-xs text-muted-foreground">{tech}{tech !== project.stack.at(-1) && <span className="ml-2 text-primary">•</span>}</span>)}</div><div className="flex flex-wrap gap-3"><SiteButton to="/projects/$slug" params={{ slug: project.slug }}>Know More</SiteButton></div></div>
        </article>)}</div>
      </section>

      <section id="experience" className="section-shell"><SectionHeading index="05" title="Experience" />
        <div className="grid gap-8 md:grid-cols-[minmax(13rem,.65fr)_1.35fr]"><div><p className="font-mono text-xs text-accent">2 MONTHS</p><div className="mt-4 h-px w-full bg-border"><div className="h-px w-1/3 bg-primary"/></div></div><div className="border-l-2 border-primary pl-6 sm:pl-9"><p className="text-sm font-semibold text-accent">AI Intern</p><h3 className="mt-2 font-display text-3xl font-bold">TechSaksham — Edunet Foundation</h3><p className="mt-3 text-sm text-primary">Joint CSR Initiative of Microsoft and SAP</p><p className="mt-6 max-w-2xl leading-8 text-muted-foreground">Developed an NLP-based chatbot by designing conversational flows and implementing intent recognition and response generation.</p></div></div>
      </section>

      <section id="education" className="section-shell bg-surface"><SectionHeading index="06" title="Education" />
        <div className="relative grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">{[
          ["2023–2027","B.Tech — Computer Science & Engineering (AI & ML)","Acropolis Institute of Technology and Research, Indore","CGPA: 8.74/10"],
          ["2023","Higher Secondary School Certificate — Class XII","Ideal International School · CBSE","91%"],
          ["2021","Secondary School Certificate — Class X","Ideal International School · CBSE","92.2%"],
        ].map((item, index) => <article key={item[0]} className="relative flex min-h-72 flex-col bg-background p-7"><span className="font-mono text-xs text-accent">0{index + 1} / {item[0]}</span><h3 className="mt-8 font-display text-xl font-bold leading-snug">{item[1]}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{item[2]}</p><p className="mt-auto pt-8 text-2xl font-bold text-primary">{item[3]}</p></article>)}</div>
      </section>

      <section id="certifications" className="section-shell"><SectionHeading index="07" title="Certifications" />
        <div className="grid gap-x-12 md:grid-cols-2">{["Oracle Cloud Infrastructure Certified AI Foundations Associate","NPTEL — Software Engineering","NPTEL — Database Management System","NPTEL — Programming in C++"].map((cert, index) => <div key={cert} className="flex items-start gap-5 border-t border-border py-5"><span className="font-mono text-xs text-accent">0{index + 1}</span><p className="font-semibold leading-6 text-foreground">{cert}</p></div>)}</div>
      </section>

      <section id="coding" className="section-shell bg-secondary"><SectionHeading index="08" title="Coding & Problem Solving" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]"><div className="flex min-h-72 flex-col justify-between border-l-4 border-primary bg-background p-7 sm:p-10"><Braces className="size-10 text-accent"/><div><p className="font-display text-5xl font-bold text-primary sm:text-7xl">350+</p><p className="mt-2 text-lg font-semibold">DSA Problems Solved</p></div></div><div className="flex flex-col justify-between gap-10 border-y border-border py-7"><div><p className="font-mono text-xs text-accent">CONSISTENCY</p><p className="mt-3 font-display text-3xl font-bold">100 Days Badge × 2</p><p className="mt-2 text-sm text-muted-foreground">LeetCode</p><div className="mt-6 grid grid-cols-3 gap-3" aria-label="LeetCode badges">{[{ src: badge10Days, label: "10 Days badge" }, { src: badge50Days, label: "50 Days badge" }, { src: badge100Days, label: "100 Days badge" }].map((badge) => <div key={badge.label} className="flex aspect-square items-center justify-center border border-border bg-background p-2 sm:p-3"><img src={badge.src} alt={badge.label} className="h-full w-full object-contain" /></div>)}</div></div>
        <div className="grid grid-cols-2 gap-px bg-border">
  {socialProfiles.map((profile) => (
    <a
      key={profile}
      href={profileLinks[profile as keyof typeof profileLinks]}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-secondary px-4 py-4 text-sm font-semibold text-muted-foreground transition hover:bg-background hover:text-primary"
    >
      {profile} ↗
    </a>
  ))}
</div></div></div>
      </section>

      <section id="contact" className="section-shell"><div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-[1.2fr_.8fr]"><div><p className="font-mono text-xs text-accent">// 09 — CONTACT</p><h2 className="mt-6 font-display text-5xl font-bold sm:text-7xl">Let’s <span className="text-primary">Connect.</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">Have a project, opportunity, or idea you'd like to discuss? Feel free to get in touch.</p><div className="mt-8">
        <SiteButton
  href="https://mail.google.com/mail/?view=cm&fs=1&to=tanushreepal2005@gmail.com&su=Portfolio%20Inquiry"
  icon="mail"
>
  Send Me an Email
</SiteButton></div></div>
      </div></section>
    </main><Footer /></div>;
}
