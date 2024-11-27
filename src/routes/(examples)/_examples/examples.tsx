import { Colors } from "@/components/ui/colors";
import { AccordianExample } from "@/examples/AccordianExample";
import { TileExample } from "@/examples/TileExample";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(examples)/_examples/examples")({
  component: () => (
    <>
      <div className="w-full flex flex-col gap-6">
        <Colors />
        <AccordianExample />
        <TileExample />
      </div>
    </>
  ),
});
