import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "docker",
    title: "Docker Containerization",
    description: "Docker is an open-source containerization platform that allows you to package your application and all its dependencies into a standardized unit called a container.",
    image: "/images/blog/docker.svg",
    readTime: "9 mins",
  },
  {
    id: "agi",
    title: "Artificial General Intelligence",
    description: "Artificial General Intelligence (AGI) Unlike narrow AI, which is designed for specific tasks, AGI aims to emulate human-like intelligence and adaptability.",
    image: "/images/blog/agi.svg",
    readTime: "9 mins",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="py-10 md:py-16">
          <div className="container text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent mb-6">
              TurpleSpace Blog! 🚀
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore the latest in technology, coding, and software development. 
              From tutorials to deep dives, I share insights, tips, and tricks to 
              level up your tech skills. Let's geek out together!
            </p>
          </div>
        </section>

        <section className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link 
                to={`/blog/${post.id}`} 
                key={post.id}
                className="group transition-transform hover:scale-105 duration-200 ease-in-out"
              >
                <Card className="h-full flex flex-col overflow-hidden border-muted">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-200"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">{post.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Read more</Button>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
