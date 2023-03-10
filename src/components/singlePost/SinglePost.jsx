import { Link } from "react-router-dom";
import "./singlePost.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container ,Row , Col} from "react-bootstrap";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from 'axios'
import {Context} from "../../context/Context"
import { fontFamily } from "@mui/system";


export default function SinglePost() {
 
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post,setPost] = useState({});

  const {user} = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    const getPost = async () => {

      const res = await axios.get("https://actualbackver2.onrender.com/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async()=>{
    try{
      await axios.delete("https://actualbackver2.onrender.com/api/posts/" + path,{data:{username:user.username}});
      window.location.replace("/");
    }catch(err){}
  }
  const handleUpdate = async () => {
    try {
      await axios.put(`/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
      // window.location.replace("http://localhost:3000/post/" + path);
      window.location.reload();
    } catch (err) {}
  };
  return (
    <>
      <Container>
        <Row>
          <img
            className="d-block w-100"
            src= {`/images/${post.categories}.jpg`}
            alt="First slide"
            style={{height: "300px" , width: "80%" ,marginTop:"40px"}}
          />
        </Row>
      
        <Row style={{ width: "100%" ,marginTop:"20px",marginBottom:"20px"}}>
          <Col className ="align-middle" style ={{fontFamily:"Lora"}}>{new Date(post.createdAt).toDateString()}</Col>
          <Col xs={8}>
          {updateMode? <input className="singlePostDescInput" type="text" value= {title} onChange={(e) => setTitle(e.target.value)}/>: (
            
            <Col  style={{fontFamily:"cursive" , fontSize:"35px" ,color:"", fontWeight:"bold",  color:"gray" ,}}>{post.title}</Col>
            
            
          )}
          </Col>
          <Col style={{fontFamily:"Lora", fontSize:"20px"}}> By : {post.username} </Col>
          
          
        {/* <Col >
          
          
        </Col>
        
        
      */}
        
        </Row>
        
            {post.username === user?.username && (
              <Col style={{ marginLeft:0}}>
              {' '}
              
              <Button variant="outline-warning" onClick={() => setUpdateMode(true)}><EditIcon fontSize="large" sx={{ color: "warning" }} style={{margin: "0 10px 0px 10px"}}/></Button>
              {' '}
              <Button variant="outline-danger" onClick = {handleDelete}><DeleteIcon fontSize="large"  sx={{ color: "red" }} style={{margin: "0 10px 0px 10px"}}/></Button>
            
              </Col>
            )}
          

        <Row className= "text-justify" style={{marginLeft:"5px" , marginTop:"10px", marginBottom:"10px" , fontFamily:"Roboto" , fontSize:"18px" }}>
          {updateMode ? (
            <textarea  
              className="singlePostDescInput"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}/>
          ):(<Row>{post.desc}</Row>)}
        </Row>
        {updateMode && (
        <Button variant="outline-info" onClick={handleUpdate}>Update</Button>
      )}
      </Container>
      
    </>
  );
}
