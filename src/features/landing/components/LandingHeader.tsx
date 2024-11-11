import { HeaderContainer } from "@/components/common/HeaderContainer";
import { Button } from "@/components/ui/button";
import { CustomLink } from "@/components/ui/custom-link";
import { Link } from "@tanstack/react-router";

const LandingHeader = () => {
  return (
    <>
      <HeaderContainer
        logo={<CustomLink to="/">Logo</CustomLink>}
        mobileMenu={<Button variant={"default"}>Menu</Button>}
        navigation={
          <>
            <CustomLink to="/examples" hoverColor="default">
              Defaults
            </CustomLink>
            <CustomLink to="/examples" hoverColor="primary">
              Primary
            </CustomLink>
            <CustomLink to="/examples" hoverColor="secondary">
              Secondary
            </CustomLink>
          </>
        }
        actions={
          <>
            <Button variant={"ghost"}>
              <Link to="/login">Sign in</Link>
            </Button>
            <Button variant={"outline"}>Sign up</Button>
          </>
        }
      />
    </>
  );
};

export { LandingHeader };
