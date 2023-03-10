import { Link } from "react-router-dom";
import "./topbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";
import Image from 'react-bootstrap/Image'
import HomeIcon from '@mui/icons-material/Home';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import MessageIcon from '@mui/icons-material/Message';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useContext } from "react";
import { Context } from "../../context/Context";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
const  Topbar = () => {
  
  const {user,dispatch} = useContext(Context)
  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }
  return (
    <Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="/" ><p className="brandName" >Youra</p></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"><HomeIcon fontSize="large" sx={{ color: "black" }} style={{margin: "0 10px 0px 10px"}}/></Nav.Link>
            <Nav.Link href="/write"><DriveFileRenameOutlineIcon fontSize="large" sx={{ color: "black" }} style={{margin: "0 10px 0px 10px"}}/></Nav.Link>
            <Nav.Link href="/contact"><MessageIcon fontSize="large" sx={{ color: "black" }} style={{margin: "0 10px 0px 10px"}}/></Nav.Link>
            {
            user ? (<Container>
              <Nav className="justify-content-end">
              <Nav.Link href="/settings"><SettingsIcon fontSize="large" sx={{ color: "black" }} style={{margin: "0 10px 0px 10px"}}/></Nav.Link>
              <Nav.Link onClick={handleLogout}><LogoutIcon fontSize="large" sx={{ color: "black" }} style={{margin: "0 10px 0px 10px"}} /></Nav.Link>
              </Nav>
          </Container>) : 
            (<Container >
              <Nav className="justify-content-end">
              <Nav.Link href="/login"><LoginIcon fontSize="large" sx={{ color: "black" }} style={{margin: "0 10px 0px 10px"}}/></Nav.Link>
              <Nav.Link href="/register"><AppRegistrationIcon fontSize="large" sx={{ color: "black" }} style={{margin: "0 10px 0px 10px"}}/></Nav.Link>
              </Nav>
            </Container>)
            }
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Topbar;
