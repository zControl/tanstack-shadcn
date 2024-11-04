import { Outlet } from "@tanstack/react-router";
import { HeaderContainer } from "@/components/common/HeaderContainer";
import { AppLogo } from "@/components/common/AppLogo";
import { CustomLink } from "../ui/custom-link";
import { ThemeToggle } from "../common/ThemeToggle";

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <HeaderContainer
        logo={<AppLogo />}
        mobileMenu={<div className="text-primary-foreground">Menu</div>}
        navigation={
          <div className="flex space-x-4">
            <CustomLink to="/chores" size="lg">
              Chores
            </CustomLink>
            <CustomLink to="/allowance" size="lg">
              Allowance
            </CustomLink>
            <CustomLink to="/activities" size="lg">
              Activities
            </CustomLink>
          </div>
        }
        actions={<ThemeToggle />}
      />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
