import { createLazyFileRoute } from "@tanstack/react-router";
import { PageContainer } from "@/components/common/PageContainer";

export const Route = createLazyFileRoute("/")({
  component: App,
});

function App() {
  return (
    <PageContainer
      title="FamBoard"
      description="A family board to track chores and screen time."
      keywords="family, board, chores, screen time, allowance, activities"
    >
      <div className="flex justify-center items-center border border-red-500">
        <h1>Landing Page</h1>
      </div>
    </PageContainer>
  );
}

export default App;
