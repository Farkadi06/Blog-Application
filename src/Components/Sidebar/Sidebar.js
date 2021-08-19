import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(()=> {
        const getCats = async () => {
            const res = await axios.get('/categories');
            setCats(res.data)
        }
        getCats();
    },[])
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
                  { cats.map((cat) => (
                    <li className="sidebarListItem">
                        <Link className='link' to={`/?cat=${cat.name}`}>{cat.name}</Link>
                    </li>
                   ))}
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
