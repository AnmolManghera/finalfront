import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useContext ,useState} from "react";
import { Context } from "../../context/Context";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categories, setCat] = useState("");
  
  const {user} = useContext(Context)

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const newPost = {
      username: user.username,
      categories,
      title,
      desc,
    };
    try{
      const res = await axios.post("/api/posts",newPost);
      window.location.replace("/post/" + res.data._id);
    }catch(err){
      console.log(err);
    }
    

  }
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={8}>
          <h1>Write your story</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                required
                type="text"
                placeholder="Enter your title"
                onChange={e=>setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example" onChange={e=>setCat(e.target.value)}>
            
              <option>Select Category</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Health">Health</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Personal">Personal</option>
              <option value="Finance">Finance</option>
              <option value="Music">Music</option>
              <option value="Sports">Sports</option>
              
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDesc">
              <Form.Label>Blog</Form.Label>
              <Form.Control 
                as="textarea" 
                aria-label="With textarea" 
                style={{height:"400px"}} 
                onChange={e=>setDesc(e.target.value)}  />
            </Form.Group>
            
           <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
           <Button variant="success" type="submit">
              Submit
           </Button>

            </Form.Group>
            </Form>
        </Col>
        </Row>
    </Container>
  );
}

export default CreatePost;
