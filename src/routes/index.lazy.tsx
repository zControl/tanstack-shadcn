import { PageContainer } from "@/components/common/PageContainer";
import { Button } from "@/components/ui/button";
import { LandingHeader } from "@/features/landing/components/LandingHeader";
import { useToast } from "@/hooks/use-toast";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: App,
});

function App() {
  const { toast } = useToast();
  return (
    <>
      <LandingHeader />
      <PageContainer
        title="Landing Page"
        description="First page when you visit."
        keywords="app, landing, page, first, welcome"
      >
        <h1>Landing Page</h1>
        <Button
          onClick={() => {
            toast({
              title: "Sample Toast Title",
              description: "Sample Toast Description",
            });
          }}
        >
          Toast
        </Button>
      </PageContainer>
    </>
  );
}

export default App;
