import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './HomeScreen.css'

function HomeScreen() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/posts' + search);
            console.log(res)
            setPosts(res.data);
        }
        fetchPosts()
    }, [search])
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
