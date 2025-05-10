import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left text-sm">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} TurpleSpace Blog. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="h-4 w-4 fill-primary text-primary" />
          <span>by dharshan-kumar</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
