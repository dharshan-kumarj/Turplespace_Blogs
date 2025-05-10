import { Link } from "react-router-dom";
import { ThemeToggle } from "./theme/theme-toggle";
import { Button } from "./ui/button";
import { Home, Book, Github } from "lucide-react";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
              TurpleSpace
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link 
              to="/" 
              className="flex items-center text-sm font-medium transition-colors hover:text-primary"
            >
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <Link 
              to="/blog" 
              className="flex items-center text-sm font-medium transition-colors hover:text-primary"
            >
              <Book className="h-4 w-4 mr-1" />
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/dharshan-kumar" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
