import { AppLogo } from "@/components/common/AppLogo";
import { NotFound } from "@/components/common/NotFound";
import { SidebarLayout } from "@/components/common/SidebarLayout";
import { CustomLink } from "@/components/ui/custom-link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
} from "@tanstack/react-router";
import {
  AppWindowIcon,
  BookTextIcon,
  BoxIcon,
  ComponentIcon,
  HomeIcon,
  LetterTextIcon,
  PaletteIcon,
} from "lucide-react";

export const Route = createFileRoute("/(app)/_examples")({
  component: ExamplesLayout,
  notFoundComponent: NotFound,
});

const basics = [
  {
    title: "Overview",
    url: "/demo",
    icon: HomeIcon,
  },
  {
    title: "Basic",
    url: "/demo/basic",
    icon: ComponentIcon,
  },
  {
    title: "Colors",
    url: "/demo/colors",
    icon: PaletteIcon,
  },
  {
    title: "Typography",
    url: "/demo/typography",
    icon: LetterTextIcon,
  },
  {
    title: "Containers",
    url: "/demo/containers",
    icon: BoxIcon,
  },
  {
    title: "Modals",
    url: "/demo/modals",
    icon: AppWindowIcon,
  },
  {
    title: "Forms",
    url: "/demo/forms",
    icon: BookTextIcon,
  },
];

function ExamplesSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Basics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {basics.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <Link to={item.url}>
                      {<item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>FOOTER</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
function ExamplesLayout() {
  return (
    <>
      <SidebarProvider>
        <ExamplesSidebar />
        <SidebarLayout
          logo={
            <>
              <SidebarTrigger />
              <AppLogo />
            </>
          }
          mobileMenu={<div className="text-primary-foreground">Menu</div>}
          navigation={
            <div className="flex space-x-4">
              <CustomLink to="/demo" size="lg">
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
        >
          <Outlet />
        </SidebarLayout>
      </SidebarProvider>
    </>
  );
}
