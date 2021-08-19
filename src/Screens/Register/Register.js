import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
        setError(true)
    }
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            value={username}
            onChange={(input) => setUsername(input.target.value)}
            type="text"
            className="registerInput"
            placeholder="Enter your Username..."
          />
          <label>Email</label>
          <input
            value={email}
            onChange={(input) => setEmail(input.target.value)}
            type="Email"
            className="registerInput"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            onChange={(input) => setPassword(input.target.value)}
            type="password"
            className="registerInput"
            placeholder="Enter your password..."
          />
          <button className="registerButton" type="submit">
            Register
          </button>
        </form>
        {error && <span style={{color: "red", textAlign: 'center', marginTop: 10}}>Something went wrong</span>}
      </div>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      
    </div>
  );
}

export default Register;
