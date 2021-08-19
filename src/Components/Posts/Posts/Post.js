import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'

function Post({post}) {
    return (
        <>
            <div className="post">
                {/* {post.photo && <img 
                    className="post__img"
                    src="https://static.stambol.com/wordpress/wp-content/uploads/2021/05/digital-art-metaverse-painting-nft-augmented-reality.jpg"
                    alt="" />} */}
                <img 
                    className="post__img"
                    src="https://static.stambol.com/wordpress/wp-content/uploads/2021/05/digital-art-metaverse-painting-nft-augmented-reality.jpg"
                    alt="" />
                <div className="post__colletions">
                    <ul className="post__colletion">
                       {post.categories.map((c) => (
                           <li>{c}</li>
                       ))}
                    </ul>
                    <p>{new Date(post.createdAt).toDateString()}</p>
                </div>
                <Link to={`/post/${post._id}`} className='link'>
                    <span className="post__title">{post.title}</span>
                </Link>
                <p className="post__description">{post.desc}</p>
            </div>
        </>
    )
}

export default Post
