import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import CodeSection from "../../components/code-section";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Docker = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <div className="container py-8">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
          
          <div className="text-center mb-10">
            <img
              src="/images/blog/dockericon.svg"
              alt="Docker"
              className="mx-auto h-32 w-32 my-6"
            />
            <h1 className="text-4xl font-bold tracking-tight">Introduction to Docker</h1>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
            <h2>What is Docker?</h2>
            <p>
              Docker is an open-source platform that enables developers to build,
              ship, and run applications as lightweight, portable, and
              self-sufficient containers. These containers are isolated
              environments that contain everything an application needs to run,
              including libraries, dependencies, and runtime environment, ensuring
              consistency across different environments.
            </p>

            <h2>Key Features of Docker</h2>
            <ul>
              <li>
                <strong>Containerization:</strong> Docker uses containerization technology
                to create containers that encapsulate an application and its
                dependencies.
              </li>
              <li>
                <strong>Portability:</strong> Docker containers can run on any machine that
                has Docker installed, regardless of the underlying operating
                system or hardware.
              </li>
              <li>
                <strong>Efficiency:</strong> Containers share the host system's kernel,
                making them lightweight and efficient compared to virtual
                machines.
              </li>
              <li>
                <strong>Scalability:</strong> Docker allows you to easily scale your
                applications by running multiple containers across a cluster of
                machines.
              </li>
            </ul>

            <h2>Getting Started with Docker</h2>
            <h3>Installing Docker</h3>
            <p>
              To get started with Docker, you'll need to install the Docker Engine
              on your machine. Docker provides installation packages for various
              operating systems, including Windows, macOS, and Linux.
            </p>

            <h3>Windows</h3>
            <ul>
              <li>Download Docker Desktop for Windows from Docker Hub</li>
              <li>Install Docker Desktop following on-screen instructions</li>
              <li>Start Docker Desktop from the Start menu</li>
              <li>Verify installation using the command:</li>
            </ul>

            <CodeSection language="bash">docker --version</CodeSection>

            <h3>macOS</h3>
            <ul>
              <li>Download Docker Desktop for Mac from Docker Hub</li>
              <li>Install Docker Desktop by dragging to Applications folder</li>
              <li>Start Docker from Applications folder</li>
              <li>Verify installation using the command:</li>
            </ul>

            <CodeSection language="bash">docker --version</CodeSection>

            <h2>Docker Run</h2>
            <p>
              The docker run command is quite versatile, offering a variety of options and arguments to customize the behavior of the container being created.
            </p>

            <h3>IMAGE</h3>
            <p>
              The below command specifies the Docker <strong>image</strong> to use for creating the container.
            </p>
            <CodeSection language="bash">docker run ubuntu</CodeSection>

            <h3>Networking</h3>
            <p>
              <strong>-p, --publish</strong> Publish a container's port(s) to the host.
            </p>
            <CodeSection language="bash">docker run -p 8080:80 nginx</CodeSection>
            <p>
              This will create a new container using the nginx image and map
              <strong> port 80</strong> inside the container to <strong>port 8080</strong> on the host.
            </p>

            <h2>Docker Compose</h2>
            <p>
              Docker Compose is a tool for defining and running multi-container
              Docker applications. It allows you to define the services, networks,
              and volumes for your application in a single YAML file.
            </p>

            <CodeSection language="yaml">
version: '3'
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
  db:
    image: mysql:latest
    environment:
      MYSQL_ROOT_PASSWORD: password
            </CodeSection>

            <h2>Conclusion</h2>
            <p>
              Docker has revolutionized the way developers build, ship, and run
              applications. Its containerization technology has made it easier to
              develop and deploy applications, ensuring consistency and efficiency
              across different environments.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Docker;
