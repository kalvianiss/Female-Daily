import {Container, Row, Col} from "react-bootstrap";
import "../style/landingPage.css"


const Banner = () => {
    return(
        <div>
            <Container className="text-black banner border">
                <Row>
                    <Col>
                        <h1>
                            Top Frame 970x50
                        </h1>
                    </Col>
                </Row>
            </ Container>
        </div>
    )
}

export default Banner