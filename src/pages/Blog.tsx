import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
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
  
  return (
    <>
      <Navbar />
      <main>
        <section className="py-5 text-center">
          <Container>
            <h1 className="display-5 fw-bold gradient-text mb-4">TurpleSpace Blog! 🚀</h1>
            <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px' }}>
              Explore the latest in technology, coding, and software development. 
              From tutorials to deep dives, I share insights, tips, and tricks to 
              level up your tech skills. Let's geek out together!
            </p>
          </Container>
        </section>
        
        <section className="py-5">
          <Container>
            <Row xs={1} md={2} lg={3} className="g-4">
              {blogPosts.map((post) => (
                <Col key={post.id}>
                  <Card className="h-100 zoom bg-dark text-light border-secondary">
                    <Link to={`/blog/${post.id}`}>
                      <Card.Img 
                        variant="top" 
                        src={post.image} 
                        className="p-3" 
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-transparent">
                      <div className="d-flex justify-content-between align-items-center">
                        <Link to={`/blog/${post.id}`} className="btn btn-sm btn-outline-primary">
                          Read more
                        </Link>
                        <small className="text-muted">{post.readTime}</small>
                      </div>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;