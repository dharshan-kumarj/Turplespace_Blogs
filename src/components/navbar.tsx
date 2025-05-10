import React from 'react';
import { Navbar as BsNavbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../complex/ThemeContext';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <BsNavbar 
      bg={isDarkMode ? 'dark' : 'light'} 
      variant={isDarkMode ? 'dark' : 'light'} 
      expand="lg"
      className="mb-4"
    >
      <Container>
        <BsNavbar.Brand as={Link} to="/" style={{ color: '#aa14f0' }}>
          TurpleSpace
        </BsNavbar.Brand>
        
        <BsNavbar.Toggle aria-controls="navbar-nav" />
        
        <BsNavbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <i className="bi bi-house-door me-1"></i> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              <i className="bi bi-journal-text me-1"></i> Blog
            </Nav.Link>
          </Nav>
          
          <div className="d-flex">
            <Button 
              variant={isDarkMode ? 'outline-light' : 'outline-dark'}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="me-2"
            >
              {isDarkMode ? (
                <i className="bi bi-sun"></i>
              ) : (
                <i className="bi bi-moon"></i>
              )}
            </Button>
            
            <Button 
              variant={isDarkMode ? 'outline-light' : 'outline-dark'}
              as="a"
              href="https://github.com/dharshan-kumar"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </Button>
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;