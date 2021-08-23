import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import "./Navbar.css";

function Navbar() {
  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }
  return (
    <div className="top">
      <div className="top__left">
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-instagram"></i>
      </div>
      <div className="top__center">
        <ul className="toplist">
          <li className="toplistItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="toplistItem">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="toplistItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="toplistItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="toplistItem">
            {user && (
              <Link to="/" className="link" onClick={handleLogout}>
                LOGOUT
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="top__right">
        {user ? (
          <img
            src="https://avatars.githubusercontent.com/u/58217000?v=4"
            className="topImage"
            alt=""
          />
        ) : (
          <ul className="toplist">
            <li className="toplistItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="toplistItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Navbar;
