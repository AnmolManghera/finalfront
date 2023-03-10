import "./register.css"
import { Container ,Form , Button, ButtonGroup } from "react-bootstrap";
import {useState} from 'react'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';

export default function Register() {
  const [username,setUsername] =  useState("");
  const [email,setEmail] =  useState("");
  const [password,setPassword] =  useState("");
  const [error,setError] = useState(false);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    setError(false);
    try{
      
      const res = await axios.post("https://actualbackver2.onrender.com/api/auth/register" , {
        username,
        email,
        password,
      });
      // console.log(res);
      res.data && window.location.replace("/login");

    }catch(err){
      // console.log(err);
      setError(true);
    }
    
  }
    return (
      <Container style={{width:"20%" ,marginTop:"150px"}}>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                required
                type="text"
                placeholder="Enter your name"
                onChange={e=>setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="Enter your email"
                onChange={e=>setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Enter your password"
                onChange={e=>setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <ButtonGroup aria-label="Basic example" vertical style={{width:"100%"}}>
                <Button variant="success">Login</Button>
                <Button variant="warning" type="submit">Register</Button>
                
              </ButtonGroup>

            </Form.Group>
      </Form>
      {error && <Alert variant= 'danger'>
          Something went wrong!
        </Alert> }
    </Container>
    )
}
