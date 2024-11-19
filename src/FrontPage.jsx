import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./FrontPage.css"; // Custom CSS file for additional styling

function FrontPage() {
  return (
    <Container fluid className="p-4">
      {/* Header Section */}
      <header className="text-center mb-5">
        <h1 className="display-4">Welcome to ZEDI</h1>
        <p className="lead">The Ultimate EDI Integration Platform</p>
      </header>

      {/* About Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4">What is ZEDI?</h2>
        <p>
          ZEDI manages EDI in all its forms, whether that’s traditional EDI like
          EDIFACT, ANSI, TRADACOMS, or modern formats like XML, JSON, CSV, and even
          spreadsheets. It integrates directly with popular business systems via
          APIs, eliminating human involvement in processing orders, ASNs, invoices,
          and more.
        </p>
        <p>
          With top-tier performance, ZEDI is capable of handling tens of thousands
          of transactions daily, offering price plans that make it accessible to even
          the smallest businesses. Being cloud-based, ZEDI requires no hardware
          investment, and our proactive monitoring ensures issues are resolved before
          they impact your business.
        </p>
      </section>

      {/* Features Section */}
      <section className="features mb-5">
        <h2 className="text-center mb-4">Unrivalled Functionality</h2>
        <Row>
          <Col md={6} lg={4}>
            <Card className="mb-3 text-center">
              <Card.Body>
                <i className="material-icons display-4 text-primary">cloud_done</i>
                <Card.Title>Cloud-Based</Card.Title>
                <Card.Text>
                  No hardware investment. All transactions are securely managed in
                  the cloud.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="mb-3 text-center">
              <Card.Body>
                <i className="material-icons display-4 text-success">trending_up</i>
                <Card.Title>High Performance</Card.Title>
                <Card.Text>
                  Handle tens of thousands of transactions daily with ease and
                  reliability.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="mb-3 text-center">
              <Card.Body>
                <i className="material-icons display-4 text-warning">compare</i>
                <Card.Title>Complete Visibility</Card.Title>
                <Card.Text>
                  Gain control, insight, and flexibility with comprehensive
                  transaction visibility.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials mb-5 text-center">
        <h2 className="mb-4">Here’s What ZEDI Users Are Saying</h2>
        <p>
          “ZEDI has streamlined our processes and made integration effortless. It's
          a game-changer for our business!”
        </p>
      </section>

      {/* Benefits Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Why Choose ZEDI?</h2>
        <p>
          ZEDI supports file-based EDI like EDIFACT and XML using FTP, AS2, OFTP2,
          and more. With ready-made API connections to systems like NetSuite,
          Business Central, Xero, QuickBooks, and Shopify, ZEDI is the ideal choice
          for businesses of all sizes and industries.
        </p>
        <p>
          Our technical support ensures you’re never left waiting. Speak directly
          to experts who resolve issues quickly and efficiently—no “log a ticket
          and wait 72 hours” nonsense!
        </p>
      </section>

      {/* Call-to-Action Section */}
      <section className="call-to-action text-center mb-5">
        <h3>Are You Ready to Talk About ZEDI?</h3>
        <p>
          Let’s discuss how ZEDI can transform your business integration needs. Get
          started today.
        </p>
        <Button variant="primary" href="/contact">
          Contact Us
        </Button>
      </section>
    </Container>
  );
}

export default FrontPage;
