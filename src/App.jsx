import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import CreatePost from "./pages/write/Write";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from "./components/post/Post";
import Posts from "./components/posts/Posts";
import Category from "./components/categories/Categories";
import SinglePost from "./components/singlePost/SinglePost";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    
    <BrowserRouter>
    
      <Topbar/>
      <Routes>
        <Route exact path="/" element= {<Homepage />} />
        <Route path="/posts" element= {<Homepage/>}/>
        <Route path="/login" element= {user ? <Homepage /> : <Login />}/>
        <Route path="/register" element= {user ? <Homepage /> : <Register />}/>
        <Route path="/write" element= {user ? <CreatePost /> : <Login />}/>
        <Route path="/settings" element= {user ? <Settings /> : <Login />}/>
        <Route path="/post/:postId" element = {<Single/>}/>
        <Route path="/settings" element= {user ? <Settings /> : <Login />}/>
        </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
