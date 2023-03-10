import Carousel from 'react-bootstrap/Carousel';
import "./categories.css"
import {useState,useEffect} from 'react'
import axios from 'axios'
// function Category() {
//   return (
//     <Carousel>
//       <Carousel.Item interval={1000}>
//         <img
//           className="d-block w-100"
//           src="https://images.freeimages.com/images/large-previews/ab7/gerber-and-rose-2-1544099.jpg"
//           alt="First slide"
//           style={{height: "400px" , width: "75%"}}
//         />
//         <Carousel.Caption>
//           <h3>TECHNOLOGY</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         <img
//           className="d-block w-100"
//           src="https://images.freeimages.com/images/large-previews/ab7/gerber-and-rose-2-1544099.jpg"
//           alt="Second slide"
//           style={{height: "400px" ,width: "75%"}}
//         />
//         <Carousel.Caption>
//           <h3>NATURE</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://images.freeimages.com/images/large-previews/ab7/gerber-and-rose-2-1544099.jpg"
//           alt="Third slide"
//           style={{height: "400px",width: "75%"}}
//         />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Container } from 'react-bootstrap';
function Category() {
  const [cat,setCats] = useState([]);
  useEffect(() => {
    axios.get("https://actualbackver2.onrender.com/api/categories").then((res)=> setCats(res.data))
  }, [])
  
  return (
    
    <Container className='categories' style={{overflowX: "scroll"}}>
    <ButtonGroup aria-label="Basic example">
      {/* {
       cat.map((c)=>(
        <Button variant="secondary">{c.name}</Button>
       ))
      } */}
      <Button variant="primary" style={{borderRadius:"0"}}>Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Button variant="primary" style={{borderRadius:"0"}}>Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      
    
    </ButtonGroup>
    </Container>
  );
}



export default Category;
