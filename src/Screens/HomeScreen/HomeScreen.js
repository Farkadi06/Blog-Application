import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './HomeScreen.css'

function HomeScreen() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/posts');
            console.log(res)
            setPosts(res.data);
        }
        fetchPosts()
    }, [])
    return (
        <>
            <Header/>
            <div className='Home'>
                <Posts posts = {posts}/>
                <Sidebar/>
            </div>
        </>
    )
}

export default HomeScreen
