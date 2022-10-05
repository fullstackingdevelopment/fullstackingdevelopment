import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/FSDLogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const date = new Date();

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img style={{ padding: '5px', margin: '5px'}} src={logo} alt="Logo" />
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">

            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>

            <p>Copyright {date.getFullYear()}. All Rights Reserved</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}
