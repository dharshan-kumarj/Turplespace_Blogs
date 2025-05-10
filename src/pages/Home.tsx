import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useTheme } from '../complex/ThemeContext';

const Home: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <>
      <Navbar />
      <main className="flex-grow-1">
        <section className="py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-5 mb-lg-0">
                <h1 className="display-5 fw-bold gradient-text mb-4">Welcome to TurpleSpace</h1>
                <p className="lead mb-4">
                  Exploring the intersection of technology, creativity, and innovation. 
                  Join me on this journey to learn and grow together.
                </p>
                <div className="d-grid gap-2 d-md-flex">
                  <Link to="/blog">
                    <Button variant="primary" size="lg" className="px-4 me-md-2">
                      <i className="bi bi-journal-text me-2"></i>Explore the Blog
                    </Button>
                  </Link>
                  <a 
                    href="https://github.com/dharshan-kumar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline-secondary" size="lg" className="px-4">
                      <i className="bi bi-github me-2"></i>GitHub Profile
                    </Button>
                  </a>
                </div>
              </Col>
              <Col lg={6}>
                <div className="p-5" style={{ 
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, rgba(170, 20, 240, 0.2) 0%, rgba(200, 85, 255, 0.2) 100%)'
                }}>
                  <div className={`p-4 text-center ${isDarkMode ? 'bg-dark' : 'bg-light'}`} style={{ borderRadius: '0.75rem' }}>
                    <i className="bi bi-braces-asterisk" style={{ fontSize: '8rem', color: '#aa14f0' }}></i>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        
        <section className={`py-5 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
          <Container>
            <div className="text-center mb-5">
              <h2 className="fw-bold">Featured Blog Posts</h2>
              <p className="lead">Check out some of my latest articles and tutorials</p>
            </div>
            
            <Row className="g-4">
              <Col md={6}>
                <Link to="/blog/docker" className="text-decoration-none">
                  <Card className={`h-100 zoom ${isDarkMode ? 'bg-dark text-light border-secondary' : ''}`}>
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <img 
                          src="/images/blog/dockericon.svg" 
                          alt="Docker" 
                          className="me-3" 
                          style={{ width: '48px', height: '48px' }}
                        />
                        <h3 className="card-title mb-0">Docker Containerization</h3>
                      </div>
                      <Card.Text>
                        Learn how Docker allows you to package your application and all its 
                        dependencies into a standardized unit called a container.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-transparent border-top-0">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="btn btn-sm btn-outline-primary">Read more</span>
                        <small className="text-muted">9 mins read</small>
                      </div>
                    </Card.Footer>
                  </Card>
                </Link>
              </Col>
              
              <Col md={6}>
                <Link to="/blog/agi" className="text-decoration-none">
                  <Card className={`h-100 zoom ${isDarkMode ? 'bg-dark text-light border-secondary' : ''}`}>
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <img 
                          src="/images/blog/agi.svg" 
                          alt="AGI" 
                          className="me-3" 
                          style={{ width: '48px', height: '48px' }}
                        />
                        <h3 className="card-title mb-0">Artificial General Intelligence</h3>
                      </div>
                      <Card.Text>
                        Explore how AGI aims to emulate human-like intelligence and 
                        adaptability across a broad range of tasks.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-transparent border-top-0">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="btn btn-sm btn-outline-primary">Read more</span>
                        <small className="text-muted">9 mins read</small>
                      </div>
                    </Card.Footer>
                  </Card>
                </Link>
              </Col>
            </Row>
            
            <div className="text-center mt-5">
              <Link to="/blog">
                <Button variant="outline-primary">
                  View All Posts <i className="bi bi-arrow-right ms-2"></i>
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;