import { Outlet } from "@tanstack/react-router";
import { HeaderContainer } from "@/components/common/HeaderContainer";
import { AppLogo } from "@/components/common/AppLogo";
import { CustomLink } from "../ui/custom-link";

const ExamplesLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <HeaderContainer
        logo={<AppLogo />}
        mobileMenu={<div className="text-primary-foreground">Menu</div>}
        navigation={
          <div className="flex space-x-4">
            <CustomLink to="/examples" size="lg">
              Examples
            </CustomLink>
            <CustomLink to="/query" size="lg">
              Query
            </CustomLink>
            <CustomLink to="/form" size="lg">
              Form
            </CustomLink>
          </div>
        }
        actions={<div>Actions</div>}
      />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default ExamplesLayout;
