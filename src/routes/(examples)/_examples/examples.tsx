import { Colors } from "@/components/ui/colors";
import { AccordianExample } from "@/examples/AccordianExample";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(examples)/_examples/examples")({
  component: () => (
    <>
      <Colors />
      <div className="w-full">
        <AccordianExample />
      </div>
    </>
  ),
});
