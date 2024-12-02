import { PageContainer } from "@/components/common/PageContainer";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_examples/demo/tables")({
  component: DemoTablesPage,
});

function DemoTablesPage() {
  return (
    <PageContainer
      title="Demo - Tables"
      description="Tables are used to display data in a tabular format."
    >
      <div>Table Examples</div>
    </PageContainer>
  );
}
