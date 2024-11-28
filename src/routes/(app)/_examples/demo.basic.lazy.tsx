import { PageContainer } from "@/components/common/PageContainer";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_examples/demo/basic")({
  component: () => (
    <PageContainer
      title="Demo - Basic"
      description="Basic UI components used in the app."
      keywords="avatar, badge, button, checkbox, collapsible, command, context-menu, hover-card, label, popover, progress, separator, spinner"
    >
      <div>Hello /_examples/demo/basic!</div>
      <div>These are the basic components..</div>
    </PageContainer>
  ),
});
