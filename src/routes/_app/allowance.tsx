import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/allowance")({
  component: () => <div>Hello /_app/allowance!</div>,
});
