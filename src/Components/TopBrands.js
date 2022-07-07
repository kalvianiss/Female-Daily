import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nivea from "../assets/image/Nivea.png";
import TheOrdinary from "../assets/image/the-ordinary.png";
import TheBodyshop from "../assets/image/the-bodyshop.png";
import SKII from "../assets/image/SKII.png";
import maybelline from "../assets/image/maybelline.png";
import innisfree from "../assets/image/innisfree.jpg";


function TopBrands() {
  return (
    <Container>
      <Row md={6}>
        <Col><img src={Nivea} className="img-Nivea"/></Col>
        <Col><img src={TheOrdinary} className="img-Ordinary"/></Col>
        <Col><img src={TheBodyshop} className="img-Bodyshop mg-top-brands"/></Col>
        <Col><img src={SKII} className="img-SKII mg-top-brands"/></Col>
        <Col><img src={maybelline} className="img-maybelline mg-top-brands"/></Col>
        <Col><img src={innisfree} className="img-innisfree mg-top-brands"/></Col>
      </Row>
    </Container>
  );
}

export default TopBrands;