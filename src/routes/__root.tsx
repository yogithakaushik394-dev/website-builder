import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="serif text-8xl">404</h1>
        <p className="mt-4 text-muted-foreground">This page wandered off.</p>
        <Link to="/" className="mt-6 inline-block text-accent underline underline-offset-4">Back home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="serif text-3xl">Something went sideways.</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 px-5 py-2 bg-ink text-paper text-sm hover:opacity-90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Yogitha Kaushik — Engineer, Strategist, Builder" },
      { name: "description", content: "Portfolio of Yogitha Kaushik. Engineer by training, MBA at Rotman, building community spaces and ambitious products." },
      { property: "og:title", content: "Yogitha Kaushik" },
      { property: "og:description", content: "Engineer. MBA. Builder of community." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function SiteHeader() {
  const loc = useLocation();
  const onHome = loc.pathname === "/";
  return (
    <header className="px-6 md:px-12 py-6 flex items-center justify-between">
      <Link to="/" className="serif text-xl md:text-2xl tracking-tight">Yogitha Kaushik</Link>
      <nav className="flex gap-5 md:gap-8 text-sm">
        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
        <a href={onHome ? "#journey" : "/#journey"} className="hover:text-accent transition-colors">Journey</a>
        <a href={onHome ? "#projects" : "/#projects"} className="hover:text-accent transition-colors">Projects</a>
      </nav>
    </header>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <footer className="mt-24 px-6 md:px-12 py-8 border-t border-rule flex flex-col md:flex-row justify-between gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>Wow. What a ride.</span>
          <span>Toronto · 2026</span>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
