import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="header__titles">
                <div className="header_titleSmall">React & Node</div>
                <div className="header_titleLarge">Blog</div>
            </div>
            <img  
                className="header__Img" 
                src="https://miro.medium.com/max/1152/1*l5YM5LclSzYvyzqJizkcpg.png" 
                alt="" />
        </div>
    )
}

export default Header
