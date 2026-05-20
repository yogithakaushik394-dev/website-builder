import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import img from "@/assets/journey-community.jpg";
import imgGoodfoot from "@/assets/org-goodfoot.png";
import imgUandi from "@/assets/org-uandi.png";
import imgTorontoDND from "@/assets/org-torontodnd.png";
import imgCats from "@/assets/org-cats.jpg";

export const Route = createFileRoute("/journey/what-makes-me-tick")({
  head: () => ({
    meta: [
      { title: "What Makes Me Tick — Yogitha Kaushik" },
      { name: "description", content: "Volunteering and non-profit work: Goodfoot, TorontoDND, U&I Bangalore, Annex Cat Rescue." },
    ],
  }),
  component: Page,
});

const orgs = [
  {
    name: "Goodfoot",
    role: "Marketing & Communications volunteer",
    image: imgGoodfoot,
    fit: "contain" as const,
    body: "Volunteer supporting marketing and communications for Goodfoot, an organization that provides meaningful employment for the neurodivergent community through a reliable, professional courier service delivered via public transit and on foot. I developed marketing case studies for their website, helping articulate the organization's mission and impact to their community.",
  },
  {
    name: "TorontoDND",
    role: "Board member · 1,000+ member community",
    href: "https://www.torontodnd.com/policies/our_team",
    image: imgTorontoDND,
    body: "TorontoDND is a vibrant community centered around Dungeons and Dragons, fostering connection, creativity, and belonging. I am advising the organization's transition to nonprofit status and shaping long-term strategy for community growth and governance. This work involves helping establish sustainable structures, clarifying organizational values, and building systems that allow the community to thrive independently.",
  },
  {
    name: "U&I Bangalore",
    role: "Volunteer leader",
    href: "https://uandi.org.in/",
    image: imgUandi,
    fit: "contain" as const,
    body: "Volunteer leader, U&I Bangalore, an organization delivering after-school education to underserved children in Bangalore, India. I managed a 20-person team and oversaw program delivery, ensuring students received quality support and mentorship outside traditional school hours.",
  },
  {
    name: "Feline Rescue",
    role: "Bangalore · Toronto",
    image: imgCats,
    body: "I help find the right homes for foster cats at the Annex Cat Rescue, Toronto by assessing compatibility between families and animals, ensuring successful long-term placements. Previously fostered with Bangalore Cat Squad while living in India.",
  },
];

function Page() {
  return (
    <article>
      <PageHeader eyebrow="Chapter 05" title="What makes me tick." />
      <section className="px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {orgs.map((o) => (
            <div key={o.name}>
              <div className="aspect-[16/10] overflow-hidden grain mb-5 bg-paper">
                <img src={o.image ?? img} alt={o.name} loading="lazy" className={`w-full h-full ${o.fit === "contain" ? "object-contain p-6" : "object-cover"}`} />
              </div>
              <h2 className="serif text-3xl md:text-4xl leading-tight">{o.name}</h2>
              <div className="eyebrow mt-2">{o.role}</div>
              <p className="mt-4 text-foreground/85 leading-relaxed text-justify hyphens-auto">{o.body}</p>
              {o.href && (
                <a href={o.href} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-accent hover:underline">
                  Learn more ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
