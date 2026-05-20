import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/linkedin")({
  server: {
    handlers: {
      GET: async () =>
        Response.redirect("https://www.linkedin.com/in/yogithak/", 302),
    },
  },
});