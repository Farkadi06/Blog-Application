import React from "react";
import "./SinglePost.css";

function SinglePost() {
  return (
    <div className="SinglePost">
      <div className="singlePostWraper">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nft-1-1614978591.jpg"
          alt=""
          className="singlePost__img"
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor.
          <div className="singlePostEdit">
            <i className="signlePostIcon far fa-edit"></i>
            <i className="signlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:  <b>Holloo</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae officiis fugiat ipsum impedit dolor assumenda, debitis
            sapiente dolorem maiores nemo. Id iste sapiente aliquam
            reprehenderit, quidem tempore ut? Molestiae, repellendus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae officiis fugiat ipsum impedit dolor assumenda, debitis
            sapiente dolorem maiores nemo. Id iste sapiente aliquam
            reprehenderit, quidem tempore ut? Molestiae, repellendus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae officiis fugiat ipsum impedit dolor assumenda, debitis
            sapiente dolorem maiores nemo. Id iste sapiente aliquam
            reprehenderit, quidem tempore ut? Molestiae, repellendus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae officiis fugiat ipsum impedit dolor assumenda, debitis
            sapiente dolorem maiores nemo. Id iste sapiente aliquam
            reprehenderit, quidem tempore ut? Molestiae, repellendus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae officiis fugiat ipsum impedit dolor assumenda, debitis
            sapiente dolorem maiores nemo. Id iste sapiente aliquam
            reprehenderit, quidem tempore ut? Molestiae, repellendus.
          </p>
      </div>
    </div>
  );
}

export default SinglePost;
