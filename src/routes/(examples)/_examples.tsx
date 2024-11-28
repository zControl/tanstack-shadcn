import { AppLogo } from "@/components/common/AppLogo";
import { SidebarLayout } from "@/components/common/SidebarLayout";
import { CustomLink } from "@/components/ui/custom-link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import {
  Calendar1Icon,
  HomeIcon,
  InboxIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";

export const Route = createFileRoute("/(examples)/_examples")({
  component: ExamplesLayout,
});

const basics = [
  {
    title: "Colors",
    url: "#",
    icon: HomeIcon,
  },
  {
    title: "Inbox",
    url: "#",
    icon: InboxIcon,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar1Icon,
  },
  {
    title: "Search",
    url: "#",
    icon: SearchIcon,
  },
  {
    title: "Settings",
    url: "#",
    icon: SettingsIcon,
  },
];

function ExamplesSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>COMPONENT EXAMPLES</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Basics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {basics.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>FOOTER</SidebarFooter>
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
          title="Examples Page"
          description="Examples Page"
        >
          <Outlet />
        </SidebarLayout>
      </SidebarProvider>
    </>
  );
}
