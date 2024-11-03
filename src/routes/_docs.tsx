import DocsLayout from "@/components/layout/DocsLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_docs")({
  component: DocsLayout,
});
