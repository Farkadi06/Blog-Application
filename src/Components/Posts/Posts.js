import React from 'react'
import './Posts.css'
import Post from './Posts/Post'

function Posts({posts}) {
    return (
        <div className='posts'>
            {
                posts.map(p => (
                     <Post key={p._id} post = {p}/>
                ))
            }
           
            {/* <Post img = "https://static.stambol.com/wordpress/wp-content/uploads/2021/05/digital-art-metaverse-painting-nft-augmented-reality.jpg"/>
            <Post img = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nft-1-1614978591.jpg'/> */}
        </div>
    )
}

export default Posts
