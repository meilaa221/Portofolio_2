import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} className="text-center">
            <div className="social-icon mb-3">
                <a href="https://www.linkedin.com/in/dian-gita-meilani-40a72b305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={navIcon1} alt="" /></a>
              <a href="https://x.com/DianGitaMe11950?s=09"><img src={navIcon2} alt="Twitter" /></a>
              <a href="https://www.instagram.com/dgtmeila._?igsh=dGN0M2U3enNhazcx"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Copyright 2024. DianGitaMeilaniPor</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
