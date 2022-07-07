import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GooglePlay from "../assets/image/google-play.png";
import Appstore from "../assets/image/appstore.png";
import Logo from "../assets/image/fdnlogo.png";

function about() {
  return (
    <Container>
      <Row className="justify-content-md-right text-left">
        <Col xs lg="2">
        <strong> About Us</strong>
        </Col>
        <Col xs lg="2"><strong>Terms & Coditions</strong></Col>
        <Col xs lg="2"><strong>Awards</strong></Col>
        <Col xs lg="6"><strong>
          Download Our Mobile App
          </strong></Col>
      </Row>
      <Row className="justify-content-md-right text-left">
      <Col xs lg="2"><strong>Feedback</strong></Col>
        <Col xs lg="2"><strong>
          Privasy and Policy
          </strong></Col>
        <Col xs lg="2"><strong>
          Newsletter
          </strong></Col>
        <Col xs lg="2">
        <img src={GooglePlay} className="img-googleplay"/>
        </Col>
        <Col xs lg="2">
        <img src={Appstore} className="img-googleplay"/>
        </Col>
      </Row>
      <Row className="justify-content-md-right text-left">
      <Col xs lg="2"><strong>Contact</strong></Col>
        <Col xs lg="2"><strong>
         Help
         </strong></Col>
      </Row>
      <Row className="justify-content-md-right text-left">
      <Col xs lg="2"><img src={Logo} className="img-googleplay"/></Col>
        <Col xs lg="2"><strong>
         </strong></Col>
      </Row>
      <Row className="justify-content-md-right text-left">
      <Col xs lg="6"><strong>
         Copy Right 215-2017 Female Daily Network . All right reserved</strong></Col>

         <Col xs lg="6"><strong>
         </strong></Col>
      </Row>
    
    </Container>
  );
}

export default about;