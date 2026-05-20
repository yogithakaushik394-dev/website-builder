import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import img from "@/assets/journey-internships.jpg";
import imgArterra from "@/assets/journey-arterra.jpg";
import imgGate from "@/assets/journey-gate.png";

export const Route = createFileRoute("/journey/internships")({
  head: () => ({
    meta: [
      { title: "Internships — Yogitha Kaushik" },
      { name: "description", content: "Work experience in Toronto during my MBA at Arterra AI and the Institute for Gender and the Economy." },
    ],
  }),
  component: Page,
});

const roles = [
  {
    company: "Arterra AI",
    href: "https://arterra.ai/",
    image: imgArterra,
    dates: "August — December 2025",
    body: "I spent the fall of 2025 at Arterra AI, a Toronto-based startup focused on AI-driven due diligence for infrastructure and renewable energy projects. My work centred on understanding market gaps and building relationships with key players in the space. I conducted market research, secondary research, and competitor analysis to identify gaps in due diligence practices across infrastructure and renewable energy sectors. This work directly shaped the company's go-to-market strategy and positioning. In parallel, I built and managed an outreach pipeline of 300+ contacts across institutional investors, project developers, and financial institutions. I coordinated initial conversations and helped secure pilot engagements that validated the product direction.",
    lesson: "The best market insights come from talking to people, not just reading reports. Understanding what problems actually kept investors and developers awake at night changed how I thought about building products that solve real problems.",
  },
  {
    company: "Institute for Gender and the Economy (GATE)",
    image: imgGate,
    dates: "May — August 2025",
    body: "I spent the summer at GATE, a University of Toronto research institute advancing evidence-based insights on gender equity in business and organizations. My role was to conduct structured interviews with founders and entrepreneurs, synthesize their insights, and develop business case studies for future research and curriculum development.",
    lesson: "The assumption that social impact cannot scale is unfounded. The founders I engaged with demonstrated that meaningful solutions in gender equity can be built sustainably and at scale. This reframed my understanding of what is achievable when impact is coupled with rigorous business thinking.",
    links: [
      { label: "Case study: Access to Success", href: "https://www.rotman.utoronto.ca/faculty-and-research/research-centres/gender-economy/teaching--learning/case-studies/2026/access-to-success/" },
      { label: "Case study: Foria Clinic", href: "https://www.rotman.utoronto.ca/faculty-and-research/research-centres/gender-economy/teaching--learning/case-studies/2026/foria-clinic/" },
    ],
  },
];

function Page() {
  return (
    <article>
      <PageHeader eyebrow="Chapter 02" title="Internships" lede="Work experience in Toronto during my MBA, and what they taught me." />
      <section className="px-6 md:px-12 max-w-6xl mx-auto space-y-16">
        {roles.map((r) => (
          <div key={r.company} className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 pb-16 border-b border-rule last:border-0">
            <div>
              <div className="aspect-[4/5] overflow-hidden grain mb-4">
                <img src={r.image ?? img} alt={r.company} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="eyebrow">{r.dates}</div>
              <h2 className="serif text-3xl md:text-4xl mt-2 leading-tight">{r.company}</h2>
              {r.href && (
                <a href={r.href} target="_blank" rel="noreferrer" className="text-sm text-accent mt-3 inline-block">Visit {r.company} ↗</a>
              )}
            </div>
            <div className="flex flex-col justify-between text-foreground/85 leading-relaxed text-justify hyphens-auto h-full">
              <div className="space-y-5">
                <p>{r.body}</p>
                {r.links && (
                  <ul className="space-y-1 text-sm">
                    {r.links.map((l) => (
                      <li key={l.href}>
                        <a href={l.href} target="_blank" rel="noreferrer" className="text-accent hover:underline">{l.label} ↗</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mt-6 pt-6 border-t border-rule">
                <div className="eyebrow mb-2">Key lesson</div>
                <p className="serif italic text-xl leading-snug">{r.lesson}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}
