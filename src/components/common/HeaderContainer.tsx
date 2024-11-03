interface HeaderContainerProps {
  logo: React.ReactNode;
  navigation: React.ReactNode;
  mobileMenu: React.ReactNode;
  actions: React.ReactNode;
}
const HeaderContainer = ({
  logo,
  navigation,
  mobileMenu,
  actions,
}: HeaderContainerProps) => {
  return (
    <>
      <header className="bg-header">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <span className="text-4xl font-bold">{logo}</span>
            </div>
            <div className="block md:hidden">{mobileMenu}</div>
            <nav className="hidden space-x-10 md:flex text-header-foreground">
              {navigation}
            </nav>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 space-x-2 text-header-foreground">
              {actions}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export { HeaderContainer };
