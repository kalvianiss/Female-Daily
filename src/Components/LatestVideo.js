
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import "../style/landingPage.css";
import Vid from "../assets/image/video-makeup.jpg";

const LatestVideo = () =>{
  return (
    <Container>

<Row className="justify-content-md-right text-left">
      <Col xs lg="1"></Col>
        <Col xs lg="4">
        <img src={Vid} className="img-vid"/>
        </Col>
        <Col xs lg="2">
        </Col>
        <Col xs lg="2">
        <img src={Vid} className="img-vid-two"/>
        </Col>
        <Col xs lg="1">
        </Col>
      </Row>
      <Row className="justify-content-md-right text-left">
      <Col xs lg="2"></Col>
        <Col xs lg="2">
        </Col>
        <Col xs lg="2">
        </Col>
        <Col xs lg="4">
        <img src={Vid} className="img-vid-three"/>
        </Col>
        <Col xs lg="2">
        </Col>
      </Row>
      
  </Container>
  );
}

export default LatestVideo;