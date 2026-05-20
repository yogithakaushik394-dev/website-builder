import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin } from "lucide-react";
import { Chip } from "@/components/Chip";
import portraitFormal from "@/assets/portrait-formal.jpg";
import portraitCasual from "@/assets/portrait-casual.jpg";
import imgStGallen from "@/assets/journey-stgallen.jpg";
import imgInternships from "@/assets/journey-internships.jpg";
import imgRotman from "@/assets/journey-rotman.jpg";
import imgDeloitte from "@/assets/journey-deloitte.jpg";
import imgPes from "@/assets/journey-pes.jpg";
import imgCommunity from "@/assets/journey-community.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yogitha Kaushik — Engineer, Strategist, Builder" },
      { name: "description", content: "Engineer by training. Five years at Deloitte. MBA at Rotman. Building community spaces and ambitious products." },
    ],
  }),
  component: Index,
});

const journey = [
  { to: "/journey/semester-abroad", image: imgStGallen, eyebrow: "Autumn 2025", title: "A Semester Abroad", meta: "University of St. Gallen, Switzerland" },
  { to: "/journey/internships", image: imgInternships, eyebrow: "2025", title: "Internships", meta: "Arterra AI · Institute for Gender and the Economy" },
  { to: "/journey/rotman", image: imgRotman, eyebrow: "2024 — 2026", title: "My Time at Rotman", meta: "University of Toronto" },
  { to: "/journey/deloitte", image: imgDeloitte, eyebrow: "2019 — 2024", title: "Deloitte", meta: "Solution Delivery Advisor" },
  { image: imgPes, eyebrow: "2015 — 2019", title: "PES University", meta: "Bangalore, India" },
  { to: "/journey/what-makes-me-tick", image: imgCommunity, eyebrow: "Always", title: "Leadership and Community", meta: "What makes me tick" },
];

const projects = [
  {
    name: "Robin",
    href: "https://robin-psi-rouge.vercel.app/",
    desc: "Co-building an AI-powered job application and career navigation platform. Upload your resume, and Robin analyzes job descriptions, extracts skill requirements, identifies gaps, and matches you with opportunities tailored to your strengths. Built to turn job searching from overwhelming to strategic.",
  },
  {
    name: "Dine",
    desc: "Co-building a conversational AI agent that learns your taste. Tell it what you are craving, your dietary constraints, where you are, and Dine recommends restaurants you will actually want to go to. No endless scrolling. No algorithm guessing. Just recommendations that fit your life.",
  },
  {
    name: "D&D Website",
    desc: "A dark, immersive website where D&D players and Dungeon Masters can draw from magical decks, roll on wild magic tables, and play classic Forgotten Realms tavern games all in one place. Built for the community, by someone who lives in it.",
  },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="px-6 md:px-12 pt-8 pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-12 lg:gap-20 items-start">
          {/* Left: portrait + CTA */}
          <div className="lg:sticky lg:top-12">
            <div className="flip-card aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 grain">
              <div className="flip-inner w-full h-full">
                <div className="flip-face">
                  <img src={portraitFormal} alt="Yogitha Kaushik, formal portrait" className="w-full h-full object-cover" />
                </div>
                <div className="flip-face flip-back">
                  <img src={portraitCasual} alt="Yogitha Kaushik, casual portrait" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="mt-8 max-w-md mx-auto lg:mx-0">
              <div className="eyebrow mb-3">Yogitha Kaushik</div>
              <a
                href="#journey"
                className="group inline-flex items-center justify-between w-full px-6 py-4 bg-ink text-paper hover:bg-accent transition-colors"
              >
                <span className="text-sm tracking-wide uppercase">Follow my journey</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">↓</span>
              </a>
            </div>
          </div>

          {/* Right: text */}
          <div>
            
            <h1 className="serif text-5xl md:text-7xl lg:text-8xl leading-[0.92]">
              Yogitha Kaushik.
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:yogithakaushik394@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.15em] border border-ink/80 hover:bg-ink hover:text-paper transition-colors"
              >
                <Mail size={14} /> Email
              </a>
              <a
                href="https://www.linkedin.com/in/yogithak"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.linkedin.com/in/yogithak", "_blank", "noopener,noreferrer");
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.15em] border border-ink/80 hover:bg-ink hover:text-paper transition-colors"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
            <div className="mt-10 space-y-6 text-lg text-foreground/85 leading-relaxed max-w-xl text-justify hyphens-auto">
              <p>
                I spent five years at Deloitte designing and implementing large-scale enterprise systems. Led ERP implementations across three continents, designed SAP security architecture from scratch, and automated GRC workflows.
              </p>
              <p>
                Then I completed my MBA at the University of Toronto Rotman School of Management, where I focused on strategy and organisational leadership.
              </p>
              <p>
                Outside of work, I build community spaces where people feel safe. LGBTQ+ advocacy, feline rescue, board games, TTRPGs.
              </p>
            </div>
            <blockquote className="mt-12 border-l-2 border-accent pl-6 max-w-xl">
              <p className="serif italic text-2xl md:text-3xl leading-snug text-foreground/90 text-justify hyphens-auto">
                &ldquo;Life should not be a journey to the grave with the intention of arriving safely in a pretty and well-preserved body, but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming, &lsquo;Wow! What a ride!&rsquo;&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">— Hunter S. Thompson</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="px-6 md:px-12 pt-24 pb-16 max-w-7xl mx-auto border-t border-rule">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            
            <h2 className="serif text-5xl md:text-6xl leading-tight max-w-2xl">My journey so far.</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {journey.map((j) => (
            <Chip key={j.title} {...j} />
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-12 pt-24 pb-16 max-w-7xl mx-auto border-t border-rule">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            
            <h2 className="serif text-5xl md:text-6xl leading-tight max-w-2xl">Things I am building.</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-rule border border-rule">
          {projects.map((p, i) => (
            <article key={p.name} className="bg-paper p-8 md:p-10 flex flex-col">
              <div className="eyebrow mb-4">Project 0{i + 1}</div>
              <h3 className="serif text-4xl mb-4">{p.name}</h3>
              <p className="text-sm text-foreground/80 leading-relaxed flex-1">{p.desc}</p>
              {p.href && (
                <a href={p.href} target="_blank" rel="noreferrer" className="mt-6 text-sm text-accent inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Visit project <span aria-hidden>↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
