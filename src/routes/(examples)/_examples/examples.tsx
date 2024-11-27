import { AppFooter } from "@/components/common/AppFooter";
import { AppLogo } from "@/components/common/AppLogo";
import { HeaderContainer } from "@/components/common/HeaderContainer";
import { PageContainer } from "@/components/common/PageContainer";
import { Colors } from "@/components/ui/colors";
import { CustomLink } from "@/components/ui/custom-link";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AccordianExample } from "@/examples/AccordianExample";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(examples)/_examples/examples")({
  component: () => (
    <>
      <div className="w-full flex flex-col">
        <HeaderContainer
          logo={
            <>
              <SidebarTrigger />
              <AppLogo />
            </>
          }
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
        <PageContainer
          title="Examples Page"
          description="Examples Page"
          className="flex-1"
        >
          <Colors />
          <AccordianExample />
        </PageContainer>
        <AppFooter />
      </div>
    </>
  ),
});
