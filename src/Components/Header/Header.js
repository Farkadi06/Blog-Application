import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="header__titles">
                <div className="header_titleSmall">React & Node</div>
                <div className="header_titleLarge">Blog</div>
            </div>
            <img  className="header__Img" src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </div>
    )
}

export default Header
