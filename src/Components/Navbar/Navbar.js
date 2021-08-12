import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='top'>
            <div className="top__left">
                <i className="topIcon fab fa-facebook"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="top__center">
                <ul className="toplist">
                    <li className="toplistItem">HOME</li>
                    <li className="toplistItem">ABOUT</li>
                    <li className="toplistItem">CONTACT</li>
                    <li className="toplistItem">WRITE</li>
                    <li className="toplistItem">LOGOUT</li>
                </ul>
            </div>
            <div className="top__right">
                <img 
                    src="https://avatars.githubusercontent.com/u/58217000?v=4" 
                    className="topImage" 
                    alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Navbar
