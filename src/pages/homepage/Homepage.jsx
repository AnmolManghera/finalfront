import { useLocation } from "react-router";
import Category from "../../components/categories/Categories";
import Posts from "../../components/posts/Posts";
import Topbar from "../../components/topbar/Topbar";
import "./homepage.css";
import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Homepage() {
  // const location = useLocation();
  // console.log(location);
  const [posts,setPosts] = useState([]);

  useEffect(()=> {
    const fetchPosts = ()=>{
      const res = axios.get("/api/posts").then((res)=> setPosts(res.data));
      console.log(res);
    }
    fetchPosts();
  },[])
  return (
    <>
      <Category/>
      <Posts posts={posts}/>
    </>
  );
}
