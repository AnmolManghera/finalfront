import { Link } from "react-router-dom";
import "./post.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Post({post}) {
  return (
    <Card style={{ width: '45%' , padding:"20px" ,margin:"8px" }}>
    <Card.Img variant="top" src= {`/images/${post.categories}.jpg`} height="300px"/>
    <Card.Body>
      <Link to = {`/post/${post._id}`}><Card.Title>{post.title}</Card.Title></Link>
      
      {/* add post category */}
      <Card.Text>
        {new Date(post.createdAt).toDateString() }
        <span> &#183; </span>
        {post.categories}
      </Card.Text>
     

      <Card.Text>
        {post.desc.substr(0,300) + "..."}
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
  </Card>
  );
}
