import { Row, Col, Container } from "react-bootstrap";
import "../../css/style.css";


function Footer() {
  return <>
    <div className='footer-bottom'>
      <Container>
        <Row>
          <Col md={6} className='copyright'>
            <p>Copyright &copy;. All Rights Reserved</p>
          </Col>
          <Col md={6} className='template-by'>
            <p>Make by Legendary Unit</p>
          </Col>
        </Row>
      </Container>
    </div>
  </>;
}

export default Footer;