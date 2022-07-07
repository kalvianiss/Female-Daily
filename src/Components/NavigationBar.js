import {Navbar, Container, Nav, Form, Button} from "react-bootstrap";
import "../style/landingPage.css";
import Logo from "../assets/image/fdnlogo.png";


const NavigationBar = () => {
    return(
        <div>
         <Navbar bg="white" className="mb-3">
         <div className="col-md-3 col-sm-3 col-3">
             <img src={Logo} className="logo"/>
         </div>
         <div className="col-md-12">
         <div className="row"> 
         <div className="col-md-6 col-sm-6 col-6">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
            </Form>
            </div>
            <div className="col-md-3 col-sm-3 col-3">
            <Button variant="danger">Login/Signup</Button>
            </div>
        </div>
        </div>
         </Navbar>
         <div className="row"> 
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="#home" className="nav-tengah"></Navbar.Brand>
                <Nav className="me-auto xl">
                    <Nav.Link href="#home"><strong>SKINCARE</strong></Nav.Link>
                    <Nav.Link href="#features"><strong>MAKE UP</strong></Nav.Link>
                    <Nav.Link href="#pricing"><strong>BODY</strong></Nav.Link>
                    <Nav.Link href="#pricing"><strong>HAIR</strong></Nav.Link>
                    <Nav.Link href="#pricing"><strong>FRAGRANCE</strong></Nav.Link>
                    <Nav.Link href="#pricing"><strong>NAILS</strong></Nav.Link>
                    <Nav.Link href="#pricing"><strong>TOOLS</strong></Nav.Link>
                    <Nav.Link href="#pricing"><strong>BRANDS</strong></Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
     </div>
    )
}

export default NavigationBar