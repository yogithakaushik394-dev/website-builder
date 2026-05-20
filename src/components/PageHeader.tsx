import { Link } from "@tanstack/react-router";

export function PageHeader({ eyebrow, title, lede }: { eyebrow?: string; title: string; lede?: string }) {
  return (
    <section className="px-6 md:px-12 pt-12 pb-16 max-w-6xl mx-auto">
      <Link to="/" className="eyebrow inline-flex items-center gap-2 hover:text-accent transition-colors">
        <span aria-hidden>←</span> Back to home
      </Link>
      
      <h1 className="serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-4 max-w-4xl">{title}</h1>
      {lede && <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-justify hyphens-auto">{lede}</p>}
    </section>
  );
}
