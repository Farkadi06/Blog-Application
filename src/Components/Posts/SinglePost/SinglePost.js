import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SinglePost.css";

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/"

  useEffect(() => {
    console.log(post.photo)
    const getPost = async ()=> {
        const res = await axios.get("/posts/"+ path);
        setPost(res.data)
    }

    getPost().then(console.log(PF + post.photo))
  }, [path])

  
  return (
    <div className="SinglePost">
      <div className="singlePostWraper">
        {post.photo && <img 
                    className="singlePost__img"
                    src={PF + post.photo}
                    alt="" />}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="signlePostIcon far fa-edit"></i>
            <i className="signlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:  <Link className='link' to={`/?user=${post.username}`}><b>{post.username}</b></Link>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDescription">
           {post.desc}
          </p>
      </div>
    </div>
  );
}

export default SinglePost;
