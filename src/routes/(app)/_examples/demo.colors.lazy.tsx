import { PageContainer } from "@/components/common/PageContainer";
import { ColorsExample } from "@/examples/ColorsExamples";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_examples/demo/colors")({
  component: () => (
    <PageContainer title="Demo - Colors" description="Colors used in the app">
      <ColorsExample />
    </PageContainer>
  ),
});
