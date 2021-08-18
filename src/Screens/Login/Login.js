import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <span className="loginTitle">Login</span>
                <form action="" className="loginForm">
                    <label >Email</label>
                    <input type="Email" className="loginInput" placeholder="Enter your email..." />
                    <label >Password</label>
                    <input type="password" className="loginInput"   placeholder="Enter your password..."/>
                    <button className="loginButton">Login</button>
                </form>
            </div>
                <button className="loginRegisterButton">Register</button>
        </div>
    )
}

export default Login
