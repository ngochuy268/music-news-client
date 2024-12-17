import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer } from 'react-toastify';
import { useContactController } from '../../controllers/contactController';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const { formData, handleChange, handleSubmit } = useContactController();

  useEffect(() => {
    document.title = "Contact us";
  }, []);

  return (
    <>
      <div className="contact">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <div className="contact-form">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Form.Group as={Col} md="6">
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Control
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Row>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-info">
                <h3>Keep in touch</h3>
                <p>We are always here to assist you. Don't hesitate to reach out to us via the following means for any inquiries, feedback, or concerns related to your experience on Legendary Vibes.</p>
                <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 News Street, NY, USA</h4>
                <h4><FontAwesomeIcon icon={faEnvelope} /> popvibes.net@mail.com</h4>
                <h4><FontAwesomeIcon icon={faPhone} /> +1 848 328 0238</h4>
                <div className="social">
                  <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="https://www.facebook.com/profile.php?id=61557446814240"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ToastContainer />
    </>
  );
}

export default Contact;