import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_docs")({
  component: DocsLayout,
});

function DocsLayout() {
  return (
    <>
      <div>Docs Layout</div>
      <Outlet />
    </>
  );
}
