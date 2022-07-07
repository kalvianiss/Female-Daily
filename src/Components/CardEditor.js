
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import User from "../assets/image/user.png";
import "../style/landingPage.css";

const CardEditor = ({data}) =>{
  return (
        <Col className="padding-card-editor">
          <Card>
          <img src={data.product.image}/>
            <Card variant="top" src="holder.js/100px160"/>
            <Card.Body className="text-left">
              <Card.Title>{data.product.rating}<br/>
              {data.product.name}
              </Card.Title>
              <Card.Text>
              {data.product.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
  );
}

export default CardEditor;