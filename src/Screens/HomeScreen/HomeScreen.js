import React from 'react'
import Header from '../../Components/Header/Header'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './HomeScreen.css'

function HomeScreen() {
    return (
        <>
            <Header/>
            <div className='Home'>
                <Posts/>
                <Sidebar/>
            </div>
        </>
    )
}

export default HomeScreen
