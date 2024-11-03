import "../globals.css";
import RootLayout from "@/components/layout/RootLayout";
import { createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { NotFound } from "@/components/common/NotFound";
import { ErrorPage } from "@/components/common/ErrorPage";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootLayout,
  notFoundComponent: NotFound,
  errorComponent: ErrorPage,
});
