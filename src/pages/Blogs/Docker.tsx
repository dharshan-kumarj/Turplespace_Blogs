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
                <li>Download Docker Desktop for Windows from Docker Hub</li>
                <li>Install Docker Desktop following on-screen instructions</li>
                <li>Start Docker Desktop from the Start menu</li>
                <li>Verify installation using the command:</li>
              </ul>

              <CodeSection language="bash">docker --version</CodeSection>

              <h3>Docker Run</h3>
              <p>
                The docker run command is quite versatile, offering a variety of options and arguments to customize the behavior of the container being created.
              </p>

              <CodeSection language="bash">docker run -p 8080:80 nginx</CodeSection>
              
              <h2>Docker Compose</h2>
              <p>
                Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to define the services, networks, and volumes for your application in a single YAML file.
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
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Docker;