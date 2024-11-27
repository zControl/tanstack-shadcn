import { HeaderContainer } from "@/components/common/HeaderContainer";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_docs")({
  component: DocsLayout,
});

function DocsLayout() {
  return (
    <>
      <HeaderContainer
        logo={<div>Docs</div>}
        navigation={<div>Navigation</div>}
      />
      <div>Docs Layout</div>
      <Outlet />
    </>
  );
}
