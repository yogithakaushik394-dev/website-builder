import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import img1 from "@/assets/semester-abroad-1.jpg";
import img2 from "@/assets/semester-abroad-2.jpg";
import img3 from "@/assets/semester-abroad-3.jpg";
import img4 from "@/assets/semester-abroad-4.jpg";
import img5 from "@/assets/semester-abroad-5.jpg";
import img6 from "@/assets/semester-abroad-6.jpg";

export const Route = createFileRoute("/journey/semester-abroad")({
  head: () => ({
    meta: [
      { title: "A Semester Abroad — Yogitha Kaushik" },
      { name: "description", content: "Exchange semester at the University of St. Gallen, Switzerland." },
    ],
  }),
  component: Page,
});

function Page() {
  const tiles = [img1, img2, img3, img4, img5, img6];
  return (
    <article>
      <PageHeader eyebrow="Chapter 01" title="A Semester Abroad" lede="University of St. Gallen, Switzerland. Forty countries in one classroom. Nowhere to hide." />
      <section className="px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-3 md:gap-5 mb-16">
          {tiles.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden grain">
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/85 text-justify hyphens-auto">
          <p>
            I completed an exchange semester at the University of St. Gallen, Switzerland, one of Europe&rsquo;s top-ranked business schools. The program was highly selective and intensely competitive, focusing on global strategy and finance in an international MBA cohort.
          </p>
          <p>
            Walking into that classroom on day one, I was surrounded by people from 40+ countries, all equally ambitious, all equally sharp. I couldn&rsquo;t hide. I couldn&rsquo;t blend in. That forced me to show up differently than I had before. I had to articulate my ideas clearly, defend my perspectives, and learn to lead in spaces where I wasn&rsquo;t the expert.
          </p>
          <p>
            By the end of the semester, I realized something fundamental: the best growth happens when you push yourself into genuine discomfort. Switzerland wasn&rsquo;t just about finance or strategy. It was about discovering that I was capable of more than I thought.
          </p>
        </div>
      </section>
    </article>
  );
}
