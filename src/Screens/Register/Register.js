import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
    return (
        <div className="register">
            <div className="registerWrapper">
                <span className="registerTitle">Register</span>
                <form action="" className="registerForm">
                    <label >Username</label>
                    <input type="text" className="registerInput" placeholder="Enter your Username..." />
                    <label >Email</label>
                    <input type="Email" className="registerInput" placeholder="Enter your email..." />
                    <label >Password</label>
                    <input type="password" className="registerInput"   placeholder="Enter your password..."/>
                    <button className="registerButton">Register</button>
                </form>
            </div>
                <button className="registerLoginButton">
                    <Link className='link' to='/login'>Login</Link>
                </button>
        </div>
    )
}

export default Register
