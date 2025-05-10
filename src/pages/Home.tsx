import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Button } from "../components/ui/button";
import { BookOpen, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                    Welcome to TurpleSpace
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Exploring the intersection of technology, creativity, and innovation. Join me on this journey to learn and grow together.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/blog">
                    <Button className="gap-1">
                      <BookOpen className="h-4 w-4" />
                      Explore the Blog
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="https://github.com/dharshan-kumar" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-1">
                      <Github className="h-4 w-4" />
                      GitHub Profile
                    </Button>
                  </a>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 p-4 lg:p-8">
                <div className="rounded-lg bg-gradient-to-br from-violet-600 to-purple-500 p-1">
                  <div className="rounded-md bg-background p-8">
                    <svg
                      className="h-24 w-24 md:h-32 md:w-32 text-violet-500 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-muted/40 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto text-center md:max-w-[58rem]">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Featured Blog Posts</h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of my latest articles and tutorials
              </p>
            </div>
            
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Link to="/blog/docker" className="group">
                <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      src="/images/blog/dockericon.svg"
                      alt="Docker"
                      className="h-12 w-12 transition-transform group-hover:scale-110"
                    />
                    <h3 className="text-xl font-bold">Docker Containerization</h3>
                  </div>
                  <p className="line-clamp-2 text-muted-foreground">
                    Learn how Docker allows you to package your application and all its dependencies into a standardized unit called a container.
                  </p>
                </div>
              </Link>
              
              <Link to="/blog/agi" className="group">
                <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 flex items-center gap-4">
                    <img
                      src="/images/blog/agi.svg"
                      alt="AGI"
                      className="h-12 w-12 transition-transform group-hover:scale-110"
                    />
                    <h3 className="text-xl font-bold">Artificial General Intelligence</h3>
                  </div>
                  <p className="line-clamp-2 text-muted-foreground">
                    Explore how AGI aims to emulate human-like intelligence and adaptability across a broad range of tasks.
                  </p>
                </div>
              </Link>
            </div>
            
            <div className="flex justify-center">
              <Link to="/blog">
                <Button variant="outline" className="gap-1">
                  View All Posts
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
