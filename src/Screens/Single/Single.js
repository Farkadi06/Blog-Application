import React from 'react'
import './Single.css'
import SinglePost from '../../Components/Posts/SinglePost/SinglePost'
import Sidebar from '../../Components/Sidebar/Sidebar'

function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}

export default Single
