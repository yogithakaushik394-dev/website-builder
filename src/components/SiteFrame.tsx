import { Link, Outlet, useLocation } from "@tanstack/react-router";

export function SiteFrame() {
  const loc = useLocation();
  const onHome = loc.pathname === "/";
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 md:px-12 py-6 flex items-center justify-between rule-top border-t-0">
        <Link to="/" className="serif text-2xl tracking-tight">
          Yogitha Kaushik
        </Link>
        <nav className="hidden md:flex gap-8 text-sm">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <a href={onHome ? "#journey" : "/#journey"} className="hover:text-accent transition-colors">Journey</a>
          <a href={onHome ? "#projects" : "/#projects"} className="hover:text-accent transition-colors">Projects</a>
        </nav>
      </header>
      <main className="flex-1"><Outlet /></main>
      <footer className="mt-24 px-6 md:px-12 py-8 border-t border-rule flex flex-col md:flex-row justify-between gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span>Wow. What a ride.</span>
        <span>Toronto · 2026</span>
      </footer>
    </div>
  );
}
