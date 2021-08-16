import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <div className="sidebaTitle">ABOUT ME</div>
                <img 
                    className="sidebarImg" 
                    src='https://static.stambol.com/wordpress/wp-content/uploads/2021/05/cryptoart-nft-redefining-real-768x1152.jpg' 
                    alt=''></img>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus consequatur odit neque eveniet et cum accusantium esse.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebaTitle">CATEGORIES</span>
                <ul className="sidebarList" src='' alt=''>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cenima</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebaTitle">FOLLOW US</span>
                <div className="sidebarSocial" src='' alt=''>
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
