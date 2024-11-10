import "../globals.css";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { NotFound } from "@/components/common/NotFound";
import { ErrorPage } from "@/components/common/ErrorPage";
import { AppFooter } from "@/components/common/AppFooter";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "@/components/ui/toaster";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootLayout,
  notFoundComponent: NotFound,
  errorComponent: ErrorPage,
});

function RootLayout() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
        <AppFooter />
      </div>
      <TanStackRouterDevtools position="bottom-left" />
      <Toaster />
    </>
  );
}
