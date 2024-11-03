import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_docs/docs")({
  component: () => <div>Hello /docs! We will put docs here.</div>,
});
