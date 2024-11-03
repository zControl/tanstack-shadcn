import ExamplesLayout from "@/components/layout/ExamplesLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(examples)/_examples")({
  component: ExamplesLayout,
});
