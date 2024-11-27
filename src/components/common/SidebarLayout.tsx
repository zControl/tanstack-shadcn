import { AppFooter } from "./AppFooter";
import { HeaderContainer, HeaderContainerProps } from "./HeaderContainer";
import { PageContainer, PageContainerProps } from "./PageContainer";

interface SidebarLayoutProps extends HeaderContainerProps, PageContainerProps {
  children: React.ReactNode;
}

const SidebarLayout = ({ children, ...props }: SidebarLayoutProps) => {
  return (
    <div id="content-layout" className="w-full flex flex-col">
      <HeaderContainer {...props} />
      <PageContainer {...props}>{children}</PageContainer>
      <AppFooter />
    </div>
  );
};

export { SidebarLayout };
