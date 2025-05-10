import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 mt-auto border-top bg-dark text-light">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">© {new Date().getFullYear()} TurpleSpace Blog. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">
              Made with <i className="bi bi-heart-fill text-danger"></i> by TurpleSpace
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;