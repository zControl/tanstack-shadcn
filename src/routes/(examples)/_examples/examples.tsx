import { PageContainer } from "@/components/common/PageContainer";
import { Colors } from "@/components/ui/colors";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(examples)/_examples/examples")({
  component: () => (
    <PageContainer title="Examples Page" description="Examples Page">
      <Colors />
    </PageContainer>
  ),
});
