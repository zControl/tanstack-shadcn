import { PageContainer } from "@/components/common/PageContainer";
import { LandingHeader } from "@/features/landing/components/LandingHeader";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <LandingHeader />
      <PageContainer
        title="Landing Page"
        description="First page when you visit."
        keywords="app, landing, page, first, welcome"
      >
        <div>HERO</div>
        <div>CARDS</div>
        <div>SUMMARY</div>
      </PageContainer>
    </>
  );
}

export default App;
