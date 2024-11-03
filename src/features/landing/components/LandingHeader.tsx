import { HeaderContainer } from "@/components/common/HeaderContainer";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import { CustomLink } from "@/components/ui/custom-link";
import { Link } from "@tanstack/react-router";

const LandingHeader = () => {
  return (
    <>
      <HeaderContainer
        logo={<Link to="/">Logo</Link>}
        mobileMenu={<Button variant={"default"}>Menu</Button>}
        navigation={
          <>
            <CustomLink to="/examples">Examples</CustomLink>
          </>
        }
        actions={
          <>
            <ThemeToggle />
          </>
        }
      />
    </>
  );
};

export { LandingHeader };
