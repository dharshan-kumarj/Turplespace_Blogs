import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import CodeSection from '../../components/code-section';

const Docker: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="py-4">
        <Container>
          <Link to="/blog">
            <Button variant="outline-primary" className="mb-4">
              <i className="bi bi-arrow-left me-2"></i> Back to Blog
            </Button>
          </Link>
          
          <div className="text-center mb-5">
            <img 
              src="/images/blog/dockericon.svg" 
              alt="Docker" 
              className="img-fluid mb-4"
              style={{ maxHeight: '120px' }}
            />
            <h1 className="display-5 fw-bold">Introduction to Docker</h1>
          </div>
          
          <div className="row">
            <div className="col-lg-10 mx-auto">
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
                <li>
                  <strong>Download Docker Desktop for Windows:</strong> Go to the Docker Hub
                  website (hub.docker.com) and download the Docker Desktop installer
                  for Windows.
                </li>
                <li>
                  <strong>Install Docker Desktop:</strong> Run the installer and follow the
                  on-screen instructions. Docker Desktop includes Docker Engine,
                  Docker CLI client, Docker Compose, Docker Content Trust,
                  Kubernetes, and Credential Helper.
                </li>
                <li>
                  <strong>Start Docker Desktop:</strong> Once installed, start Docker Desktop
                  from the Start menu. It may take a few moments to initialize.
                </li>
                <li>
                  <strong>Verify Installation:</strong> Open a command prompt and run the
                  following command to verify that Docker is installed and running
                  correctly:
                </li>
              </ul>

              <CodeSection language="bash">docker --version</CodeSection>

              <h3>macOS</h3>
              <ul>
                <li>
                  <strong>Download Docker Desktop for Mac:</strong> Go to the Docker Hub
                  website (hub.docker.com) and download the Docker Desktop installer
                  for macOS.
                </li>
                <li>
                  <strong>Install Docker Desktop:</strong> Double-click the downloaded .dmg
                  file to open the installer, then drag the Docker icon to your
                  Applications folder.
                </li>
                <li>
                  <strong>Start Docker Desktop:</strong> Open Docker from your Applications
                  folder. It may prompt you for system permissions.
                </li>
                <li>
                  <strong>Verify Installation:</strong> Open a terminal and run the following
                  command to verify that Docker is installed and running correctly:
                </li>
              </ul>

              <CodeSection language="bash">docker --version</CodeSection>

              <h3>Linux</h3>
              <ul>
                <li>
                  <strong>Install Docker Engine:</strong> Docker provides installation scripts
                  for various Linux distributions. Visit the Docker documentation
                  (docs.docker.com) for detailed instructions for your distribution.
                </li>
                <li>
                  <strong>Start Docker Service:</strong> Once Docker is installed, start the
                  Docker service using the following command:
                </li>
              </ul>
              
              <CodeSection language="bash">sudo systemctl start docker</CodeSection>
              
              <ul>
                <li>
                  <strong>Enable Docker Service:</strong> To ensure that Docker starts
                  automatically at boot, run the following command:
                </li>
              </ul>
              
              <CodeSection language="bash">sudo systemctl enable docker</CodeSection>
              
              <ul>
                <li>
                  <strong>Verify Installation:</strong> Run the following command to verify
                  that Docker is installed and running correctly:
                </li>
              </ul>

              <CodeSection language="bash">docker --version</CodeSection>

              <h2>Running Your First Docker Container</h2>
              <p>
                Once Docker is installed, you can run your first Docker container
                using the <strong>'docker run'</strong> command. For example, to run a basic
                Ubuntu container, you can use the following command:
              </p>

              <CodeSection language="bash">docker run -it ubuntu /bin/bash</CodeSection>

              <p>
                This command will start a new Ubuntu container and open a bash shell
                inside the container.
              </p>

              <h2>Docker Images</h2>
              <p>
                Docker images are the blueprints for containers. You can create your
                own images using a Dockerfile, which contains instructions for
                building the image. For example, here's a simple Dockerfile for
                building an image that runs a basic Python web server:
              </p>

              <CodeSection language="bash">
FROM python:3
COPY . /app
WORKDIR /app
CMD ["python", "-m", "http.server", "8000"]
              </CodeSection>

              <p>
                You can build this image using the <strong>'docker build'</strong> command and
                then run a container using the built image.
              </p>

              <h2>Docker Run</h2>
              <p>
                Certainly! The docker run command is quite versatile, offering a
                variety of options and arguments to customize the behavior of the
                container being created. Here's a comprehensive list of arguments
                and options you can use with docker run, along with explanations:
              </p>

              <h3>IMAGE</h3>
              <p>
                The below Command Specifies the Docker <strong>'image'</strong> to use for
                creating the container.
              </p>
              <CodeSection language="bash">docker run ubuntu</CodeSection>
              
              <p>
                This will create a new container using the latest version of the{" "}
                <strong>'ubuntu'</strong> image.
              </p>

              <h3>TAG</h3>
              <p>
                The below Command Specifies a particular version or <strong>'tag'</strong> of
                the Docker image.
              </p>
              <CodeSection language="bash">docker run ubuntu:18.04</CodeSection>
              
              <p>
                This will create a new container using the ubuntu image with the{" "}
                <strong>'18.04'</strong> tag.
              </p>

              <h3>COMMAND</h3>
              <p>
                The below Command Overrides the default <strong>'command'</strong> specified
                in the Docker image.
              </p>
              <CodeSection language="bash">docker run ubuntu echo "Hello, World!"</CodeSection>
              
              <p>
                This will create a new container using the ubuntu image and execute
                the echo <strong>"Hello, World!" command</strong> inside it.
              </p>

              <h3>ARGUMENTS</h3>
              <p>
                Additional <strong>'arguments'</strong> that can be passed to the command
                specified in the Docker image.
              </p>
              <CodeSection language="bash">docker run ubuntu ls -la /</CodeSection>
              
              <p>
                This will create a new container using the ubuntu image and execute
                the <strong>'ls -la /'</strong> command inside it.
              </p>

              <h3>General Options</h3>
              <p>
                <strong>' - -d, --detach '</strong> Run the container in detached mode (in the
                background).
              </p>
              <CodeSection language="bash">docker run -d ubuntu</CodeSection>
              
              <p>
                This will create a new container using the ubuntu image and run it
                in <strong>'detached'</strong> mode.
              </p>

              <p>
                <strong>' - -it, --interactive --tty '</strong> Run the container in
                interactive mode with a pseudo-TTY.
              </p>
              <CodeSection language="bash">docker run -it ubuntu /bin/bash</CodeSection>
              
              <p>
                This will create a new container using the ubuntu image and start an{" "}
                <strong>'interactive'</strong> Bash shell inside it.
              </p>

              <h3>Resource Constraints</h3>
              <p>
                <strong>' - --cpus '</strong> Limit the CPU shares for the container.
              </p>
              <CodeSection language="bash">docker run --cpus 0.5 ubuntu</CodeSection>
              
              <p>
                This will create a new container using the ubuntu image with limited{" "}
                <strong>'CPU shares (0.5).'</strong>
              </p>

              <p>
                <strong>' - --memory '</strong> Set a memory limit for the container.
              </p>
              <CodeSection language="bash">docker run --memory 512m ubuntu</CodeSection>
              
              <p>
                This will create a new container using the ubuntu image with a{" "}
                <strong>' memory limit of 512 megabytes.'</strong>
              </p>

              <h3>Networking</h3>
              <p>
                <strong>' - -p, --publish '</strong> Publish a container's port(s) to the
                host.
              </p>
              <CodeSection language="bash">docker run -p 8080:80 nginx</CodeSection>
              
              <p>
                This will create a new container using the nginx image and map{" "}
                <strong>'port 80'</strong> inside the container to <strong>'port 8080'</strong> on the
                host.
              </p>

              <p>
                <strong>' - --network '</strong> Connect the container to a Docker network.
              </p>
              <CodeSection language="bash">docker run --network=my_network nginx</CodeSection>
              
              <p>
                This will create a new container using the nginx image and connect
                it to the <strong>'my_network '</strong>Docker network.
              </p>

              <h3>Volume Mounting</h3>
              <p>
                <strong>' - -v, --volume '</strong> Bind mount a volume.
              </p>
              <CodeSection language="bash">docker run -v /host/path:/container/path ubuntu</CodeSection>
              
              <p>
                This will create a new container using the ubuntu image and{" "}
                <strong>' mount the /host/path '</strong> directory on the host to{" "}
                <strong> ' /container/path '</strong> inside the container.
              </p>

              <h3>Environment Variables</h3>
              <p>
                <strong> ' - -e, --env '</strong> Set environment variables.
              </p>
              <CodeSection language="bash">docker run -e MYSQL_ROOT_PASSWORD=my-secret-password mysql</CodeSection>
              
              <p>
                This will create a new container using the mysql image and set the{" "}
                <strong>'MYSQL_ROOT_PASSWORD environment variable.'</strong>
              </p>

              <h3>Conclusion</h3>
              <p>
                These are some of the most commonly used arguments and options for
                the docker run command. Docker provides a wide range of other
                options and configurations to customize container behavior further.
                You can always refer to the official{" "}
                <a
                  href="https://docs.docker.com/engine/reference/run/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Docker
                </a>{" "}
                documentation for a complete list of options and their detailed
                explanations.
              </p>

              <h2>Advanced Docker Concepts</h2>
              <h3>Docker Compose</h3>
              <p>
                Docker Compose is a tool for defining and running multi-container
                Docker applications. It allows you to define the services, networks,
                and volumes for your application in a single YAML file. For example,
                here's a Docker Compose file for a simple web application that
                consists of a web server and a database:
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

              <p>
                You can use the <strong>'docker-compose up'</strong> command to start the
                application defined in the Docker Compose file.
              </p>

              <h3>Docker Swarm and Kubernetes</h3>
              <p>
                Docker Swarm and Kubernetes are orchestration tools for managing
                Docker containers in a clustered environment. They provide features
                such as automated deployment, scaling, and management of
                containerized applications.
              </p>

              <h2>Conclusion</h2>
              <p>
                Docker has revolutionized the way developers build, ship, and run
                applications. Its containerization technology has made it easier to
                develop and deploy applications, ensuring consistency and efficiency
                across different environments. By leveraging Docker's features and
                ecosystem, developers can streamline their development process and
                focus more on building great applications.
              </p>
              
              {/* Author section */}
              <div className="border-top mt-5 pt-4">
                <div className="d-flex flex-column flex-md-row align-items-center">
                  <div className="me-md-4 mb-3 mb-md-0 text-center">
                    <div style={{ 
                      width: '80px', 
                      height: '80px',
                      borderRadius: '50%', 
                      overflow: 'hidden',
                      border: '3px solid var(--primary-color)',
                      margin: '0 auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#aa14f0',
                      color: '#fff',
                      fontSize: '24px',
                      fontWeight: 'bold'
                    }}>
                      <img 
                        src="/images/profile/sagar.jpeg" 
                        alt="Dharshan Kumar" 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerText = 'SS';
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-center text-md-start">
                    <p className="mb-1">Written by</p>
                    <h5 className="mb-1">
                      <a 
                        href="https://sanjaysagar.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          color: 'var(--primary-color)',
                          textDecoration: 'none'
                        }}
                      >
                        Sanjay Sagar
                      </a>
                    </h5>
                    <p className="text-white mb-0">
                      <small>
                        Posted on March 27, 2024
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Docker;