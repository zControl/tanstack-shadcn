import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/chores")({
  component: () => <div>Hello /_app/chores!</div>,
});
