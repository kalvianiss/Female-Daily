import {Container, Row, Col} from "react-bootstrap";
import "../style/landingPage.css"


const BannerKetiga = () => {
    return(
        <div>
            <Container className="text-black banner border">
                <Row>
                    <Col>
                        <h1>
                        <br/><br/><br/>
                            Horizontal 970x250
                            <br/>
                            (Internal campaign only)
                        <br/><br/><br/>
                        </h1>
                    </Col>
                </Row>
            </ Container>
        </div>
    )
}

export default BannerKetiga