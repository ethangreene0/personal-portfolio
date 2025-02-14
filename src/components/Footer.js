import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.webp";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <img src={logo} alt="Logo" style={{ width: '70px', height: 'auto' }} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" style={{marginTop:"20px"}}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ethan-greene/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
              <a href="https://www.instagram.com/egreene_11/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Instagram Icon" />
              </a>
              <a href="https://github.com/ethangreene0" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="GitHub Icon" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
