import { PageContainer } from "@/components/common/PageContainer";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_examples/demo/typography")({
  component: TypographyPage,
});

function TypographyPage() {
  return (
    <PageContainer
      title="Demo - Typography"
      description="Typography used in the app"
    >
      Typography Demo Page
    </PageContainer>
  );
}
