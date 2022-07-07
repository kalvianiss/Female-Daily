import {Button} from "react-bootstrap";
import "../style/landingPage.css";
import Logo from "../assets/image/woman-makeup.png";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';


const BoxArticle = () => {
    return(
        <div className="box">
            <img src={Logo} className="img-wm"/> 
            <Card>
                <Card.Body className="bg-card text-left">
                <h4>Looking for products that are </h4>
                <h4>just simply perfect for you?</h4>
                <br/><br/>
                <h7>Here are some products that we</h7>
                <br/>                
                <h7> believe match your skin, hair, and body!</h7>
                <br/>   
                <h7>Have we mentioned that they</h7>
                <br/>   
                <h7>solve your concerns too?</h7>
                <br/><br/><br/>
                <Button variant="danger">Login/Signup</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BoxArticle


{/* <container fluid="md">
<Row>
    <Col>
<h1>Looking for products that are just simply perfect for you?</h1></Col>
</Row>
</container>
<img src={Logo} className="img-wm"/> */}