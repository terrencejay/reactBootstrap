// HomePage.jsx
import React from 'react';
import { Container, Button, Card, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from './assets/welcome-image.jpg';

const HomePage = () => {
  // Custom styles
  const styles = {
    pageContainer: {
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      padding: '2rem 0',
    },
    mainContent: {
      textAlign: 'center',
      color: '#2c3e50',
      marginBottom: '2rem',
    },
    ctaButton: {
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '0.8rem 2rem',
      fontSize: '1.2rem',
      marginTop: '1rem',
    },
    featuredCard: {
      border: '1px solid #dee2e6',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '1rem',
    },
    welcomeImage: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
      marginBottom: '2rem',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div style={styles.mainContent}>
              <Image
                src={welcomeImage}
                fluid
                style={styles.welcomeImage}
                alt="Welcome"
              />
              
              <h1 className="mb-4">Welcome to Our Store</h1>
              <p className="lead mb-4">
                Discover amazing products and great deals today!
              </p>
              
              <Button 
                variant="primary" 
                size="lg" 
                style={styles.ctaButton}
              >
                Shop Now
              </Button>
            </div>

            <Row className="mt-5">
              <Col md={4}>
                <Card style={styles.featuredCard}>
                  <Card.Body>
                    <Card.Title>Featured Products</Card.Title>
                    <Card.Text>
                      Check out our latest collection of trending items.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card style={styles.featuredCard}>
                  <Card.Body>
                    <Card.Title>Special Offers</Card.Title>
                    <Card.Text>
                      Limited time deals and exclusive discounts.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card style={styles.featuredCard}>
                  <Card.Body>
                    <Card.Title>New Arrivals</Card.Title>
                    <Card.Text>
                      Be the first to explore our newest additions.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
