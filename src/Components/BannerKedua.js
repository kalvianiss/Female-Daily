import {Container, Row, Col} from "react-bootstrap";
import "../style/landingPage.css"


const BannerKedua = () => {
    return(
        <div>
            <Container className="text-black banner border">
                <Row>
                    <Col>
                        <h1>
                        <br/><br/><br/>
                            Billboard 970x250
                        <br/><br/><br/>
                        </h1>
                    </Col>
                </Row>
            </ Container>
        </div>
    )
}

export default BannerKedua