import { PageContainer } from "@/components/common/PageContainer";
import { Spinner } from "@/components/ui/spinner";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/status")({
  component: StatusPage,
});

function StatusPage() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["status"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/v1/status");
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      return await res.json();
    },
  });

  if (isPending || isFetching) return <Spinner size="xl" />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <PageContainer
      title="Status Page"
      description="Show the status of the web services and API endpoints"
    >
      <div>Status: {data.status}</div>
      <div>API Version: {data.version}</div>
      <div>Timestamp: {data.timestamp}</div>
    </PageContainer>
  );
}
