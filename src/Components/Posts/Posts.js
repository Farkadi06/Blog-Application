import React from 'react'
import './Posts.css'
import Post from './Posts/Post'

function Posts() {
    return (
        <div className='posts'>
            <Post img = "https://www.udiscovermusic.com/wp-content/uploads/2014/09/Best-Cover-Songs-featured-image-1000.jpg"/>
            <Post img = "https://static.stambol.com/wordpress/wp-content/uploads/2021/05/digital-art-metaverse-painting-nft-augmented-reality.jpg"/>
            <Post img = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nft-1-1614978591.jpg'/>
        </div>
    )
}

export default Posts
