import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SinglePost.css";

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async ()=> {
        const res = await axios.get("/posts/"+ path);
        setPost(res.data)
    }
    getPost()
  }, [path])
  return (
    <div className="SinglePost">
      <div className="singlePostWraper">
        {/* {post.photo && <img 
                    className="singlePost__img"
                    src="https://static.stambol.com/wordpress/wp-content/uploads/2021/05/digital-art-metaverse-painting-nft-augmented-reality.jpg"
                    alt="" />} */}
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nft-1-1614978591.jpg"
          alt=""
          className="singlePost__img"
        />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="signlePostIcon far fa-edit"></i>
            <i className="signlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:  <b>{post.username}</b>
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
