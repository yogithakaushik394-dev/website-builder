import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import img from "@/assets/journey-rotman.jpg";

export const Route = createFileRoute("/journey/rotman")({
  head: () => ({
    meta: [
      { title: "My Time at Rotman — Yogitha Kaushik" },
      { name: "description", content: "MBA at the University of Toronto Rotman School of Management." },
    ],
  }),
  component: Page,
});

const chips = [
  {
    title: "Rotman Pride President",
    body: "Elected President, Rotman Pride Club. Managed $10,000+ budget, secured corporate sponsorships including RBC ($3K), and led 10+ industry events including the annual Day of Pink awareness campaign, LGBTQIA+ career mentorship programming pairing students with senior leaders at financial institutions and consulting firms, and networking sessions connecting 2SLGBTQIA+ MBA students with peers across the Rotman cohort.",
  },
  {
    title: "Deloitte Distinction Program",
    body: "One of 22 students selected across Rotman, Schulich, and DeGroote for the Deloitte Distinction Program in management consulting. Won first place in the program's AI strategy case competition.",
  },
];

function Page() {
  return (
    <article>
      <PageHeader eyebrow="Chapter 04" title="My time at Rotman." lede="Here's where it changes." />

      <section className="px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {chips.map((c) => (
            <div key={c.title}>
              <div className="aspect-[4/3] overflow-hidden grain mb-5">
                <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <h2 className="serif text-3xl md:text-4xl leading-tight mb-4">{c.title}</h2>
              <p className="text-foreground/85 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-3xl mx-auto mt-24 pt-16 border-t border-rule">
        <div className="eyebrow mb-3">Key learnings from the MBA</div>
        <h2 className="serif text-3xl md:text-4xl mb-8 leading-tight">Two things I carry forward.</h2>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            First, push yourself out of your comfort zone. The classroom challenges, the competitions, the exchange semester pushed me to think bigger.
          </p>
          <p>
            Second, learn to lead in a safe space. As President of Rotman Pride, I created programming where people felt genuinely safe to be themselves. That's the kind of leader I want to be: someone who builds spaces where the best thinking and the best people can flourish.
          </p>
        </div>
      </section>
    </article>
  );
}
