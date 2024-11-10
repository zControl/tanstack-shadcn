import { CustomLink } from "@/components/ui/custom-link";
import { AnvilIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";

const AppFooter = () => {
  return (
    <footer className="bg-accent text-accent-foreground p-2">
      <div className="container mx-auto w-1/2">
        <div className="flex flex-wrap justify-center text-xs gap-4">
          <CustomLink to="/terms">Terms</CustomLink>
          <CustomLink to="/privacy">Privacy</CustomLink>
          <CustomLink to="/status">Status</CustomLink>
          <CustomLink to="/docs">Docs</CustomLink>
        </div>
        <div className="flex justify-center items-center space-x-4 py-2">
          <div className="flex items-center">
            <Button asChild variant="link" size={"icon"}>
              <Link to="/">
                <AnvilIcon />
              </Link>
            </Button>
            <span className="m-2">UI</span>
          </div>
          <span className="text-sm">&copy; 2024 All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export { AppFooter };
