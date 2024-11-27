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

const items = [
  {
    title: "Home",
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
      <SidebarHeader>HEADER</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
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
        <Outlet />
      </SidebarProvider>
    </>
  );
}
