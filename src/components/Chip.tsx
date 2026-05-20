import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface ChipProps {
  to?: string;
  image: string;
  eyebrow?: string;
  title: string;
  meta?: string;
  children?: ReactNode;
  hideReadMore?: boolean;
}

export function Chip({ to, image, eyebrow, title, meta, children, hideReadMore }: ChipProps) {
  const Inner = (
    <article className="group flex flex-col h-full">
      <div className="relative overflow-hidden aspect-[4/3] bg-muted grain">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
      </div>
      <div className="pt-4 flex-1 flex flex-col">
        {eyebrow && <div className="eyebrow mb-2">{eyebrow}</div>}
        <h3 className="serif text-2xl md:text-3xl leading-tight">{title}</h3>
        {meta && <div className="text-xs text-muted-foreground mt-1">{meta}</div>}
        {children && <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{children}</p>}
        {to && !hideReadMore && (
          <span className="mt-4 text-sm text-accent inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Read more <span aria-hidden>→</span>
          </span>
        )}
      </div>
    </article>
  );
  return to ? <Link to={to}>{Inner}</Link> : Inner;
}
