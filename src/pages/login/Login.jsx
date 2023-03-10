import { useContext ,useRef} from "react";
import { Container ,Form , Button, ButtonGroup } from "react-bootstrap";
import { Context } from "../../context/Context";
import "./login.css";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch , isFetching} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("https://actualbackver2.onrender.com/api/auth/login" , {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
    }
  }
  
  return (
    
    <Container style={{width:"20%" ,marginTop:"150px"}}>
    <h1>Login</h1>
      <Form onSubmit={handleSubmit}> 
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                required
                type="text"
                placeholder="Enter your email"
                ref = {userRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Enter your password"
                ref = {passwordRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <ButtonGroup aria-label="Basic example" vertical style={{width:"100%"}}>
                <Button variant="success" type = "submit" disabled={isFetching} >Login</Button>
                <Button variant="danger">Register</Button>
                
              </ButtonGroup>

            </Form.Group>
      </Form>

    </Container>
  );
}
