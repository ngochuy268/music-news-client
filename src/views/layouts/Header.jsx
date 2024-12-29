import "../../css/style.css";
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className='top-bar'>
        <Container>
          <Row>
            <Col md={6}>
              <div className='tb-contact'>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} /> popvibes.net@mail.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} /> +1 848 328 0238
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className='tb-menu'>
                <a href="#">About</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="/contact">Contact</a>
              </div>
            </Col>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
     
      <div className="h1-container">
      </div>

    </>
  );
}

export default Header;
