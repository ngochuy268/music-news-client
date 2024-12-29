import { Row, Col, Container } from "react-bootstrap";
import logo from '../../img/favicon.jpg'
import "../../css/style.css";


function Footer() {
  return (
    <>
      <footer className="ht-footer-wrapper">
        <div className="ht-footer">
          <Container>
              <Row>
                  <Col lg={3}>
                      <a href="#"><img className="logo" src={logo} alt=""/></a>
                      <p>5th Avenue st, manhattan<br/>
                      New York, NY 10001</p>
                      <p>Call us: <a href="#">(+01) 202 342 6789</a></p>
                  </Col>
                  <Col lg={3}>
                      <h4>Resources</h4>
                      <ul>
                          <li><a href="#">About</a></li> 
                          <li><a href="#">Blockbuster</a></li>
                          <li><a href="#">Contact Us</a></li>
                          <li><a href="#">Forums</a></li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Help Center</a></li>
                      </ul>
                  </Col>
                  <Col lg={3}>
                      <h4>Legal</h4>
                      <ul>
                          <li><a href="#">Terms of Use</a></li> 
                          <li><a href="#">Privacy Policy</a></li>	
                          <li><a href="#">Security</a></li>
                      </ul>
                  </Col>
                  <Col lg={3}>
                      <h4>Account</h4>
                      <ul>
                          <li><a href="#">My Account</a></li> 
                          <li><a href="#">Watchlist</a></li>	
                          <li><a href="#">Collections</a></li>
                          <li><a href="#">User Guide</a></li>
                      </ul>
                  </Col>                       
              </Row>
          </Container>     
        </div>    
        <div className="copyright">
          <p className="copyright-p">Copyright © 2024 Legendary Unit. All Rights Reserved. Let’s create the future together.</p>
        </div>                                  
      </footer>
    </>
  )
}

export default Footer;