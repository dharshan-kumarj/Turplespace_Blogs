import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '../complex/ThemeContext';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <footer className={`py-4 mt-auto border-top ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`}>
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">© {new Date().getFullYear()} TurpleSpace Blog. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">
              Made with <i className="bi bi-heart-fill text-danger"></i> by dharshan-kumar
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;