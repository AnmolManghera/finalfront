import { useContext } from "react";
import { Container ,Row,Col,Button,Form,ButtonGroup} from "react-bootstrap";
import "./settings.css";
import {Context} from "../../context/Context"

export default function Settings() {
  const {user} = useContext(Context);
  return (
    
    <Container style={{width:"60%", border:"2px solid black" , marginTop:"40px"}} className="gradientClass">
      <Row style={{marginTop:"30px", marginBottom:"20px"}}>
        <Col>Update your account</Col>
        
      </Row>
      <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                required
                type="text"
                placeholder="Enter your title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
                name="email"
                required
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
                name="password"
                required
                type="password"
                placeholder="Enter your email"
              />
            </Form.Group>
            
            
           <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <ButtonGroup aria-label="Basic example">
            <Button variant="success">Submit</Button>
            <Button variant="danger">Delete your account</Button>
            
          </ButtonGroup>

            </Form.Group>
            </Form>
    </Container>

  );
}
