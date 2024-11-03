import { AppFooter } from "@/components/common/AppFooter";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const RootLayout = () => {
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
};

export default RootLayout;
