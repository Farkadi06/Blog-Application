import React from 'react'
import './Post.css'

function Post({img}) {
    return (
        <>
            <div className="post">
                <img 
                    className="post__img"
                    src={img} 
                    alt="" />
                <div className="post__colletions">
                    <ul className="post__colletion">
                        <li>Music</li>
                        <li>Life</li>
                    </ul>
                    <p>12h ago</p>
                </div>
                <span className="post__title">Lorem ipsum dolor sit amet! </span>
                <p className="post__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ex ad quam veritatis. Nostrum quos blanditiis incidunt temporibus id possimus officia deleniti impedit culpa qui magni, delectus neque? Aperiam, doloremque.</p>
            </div>
        </>
    )
}

export default Post
