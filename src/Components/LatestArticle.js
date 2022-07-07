
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "../style/landingPage.css";

const LatestArticle = ({data}) =>{
  return (
        <Col className="padding-la">
          <Card>
          <img src={data.image}/>
            <Card variant="top"/>
            <Card.Body className="text-left">
              <Card.Title>{data.title}<br/>
              {data.author}
              </Card.Title>
              <Card.Text>
              {data.published_at}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
  );
}

export default LatestArticle;