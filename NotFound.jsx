import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import welcomeImage from './assets/welcome-image.jpg';
const NotFound = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <Image
            src={welcomeImage}
            alt="Page Not Found"
            fluid
          />
          <h1 className="display-4 text-primary">404 - Not Found</h1>
          <p className="lead">The page you are looking for does not exist.</p>
          <NavLink to="/" className="btn btn-primary">
            Go Home
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;