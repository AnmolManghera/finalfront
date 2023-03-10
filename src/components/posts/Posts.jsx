import Post from "../post/Post";
import "./posts.css";
import { Row } from "react-bootstrap";
import {Container} from "react-bootstrap";
export default function Posts({posts}) {
  return (

    <Container>
        <Row xs={1} md={2} className="g-4 mt-5 ">
        
          {posts.map((p)=>(
            <Post post ={p}/>
          ))}
        
        </Row>
        </Container>
      
    
  );
}
