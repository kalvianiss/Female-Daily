import "../style/landingPage.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Logo from "../assets/image/user-review.png";

import Row from 'react-bootstrap/Row';


const LatestReview = ({data}) => {
    return (
        <container>
        <Row>
            <Col xs lg="12" className="padding-lr">
            <Card>
                <div className="col-md-12">
                        <div className="row">
                                <div className="col-md-3 col-sm-3 col-3  mt-3">
                                <img src={data.product.image} className="img-lr"/>
                                </div>
                            <div className="col-md-5 col-sm-5 col-5  mt-4">
                                <p className="text-left"><strong>{data.product.name}</strong><br/>
                            {data.product.desc}</p>
                            </div>
                            <div className="col-md-4 col-sm-4 col-4">
                            </div>
                        </div>     
                </div>
                    <Card variant="top"/>
                        <Card.Body className="text-left">
                        <Card.Title></Card.Title>
                        <Card.Text>
                        {data.comment}
                        <p className="text-review"><strong>...Read more</strong></p>
                        </Card.Text>
                        </Card.Body>
                        <img src={Logo} className="img-user-lr"/> 
                    </Card>
                <p><strong>{data.user}</strong></p>
                <p>{data.profile}</p>
            </Col>
            </Row>
            </container>
  );
}

export default LatestReview
