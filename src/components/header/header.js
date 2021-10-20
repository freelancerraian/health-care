import React from 'react';
import './header.css';
import logo from '../../img/heart.png';
import { NavLink } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import userimg from '../../img/user.jpg';

const Header = () => {

  const {user, logout} = useAuth();

    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid container">
              <img src={logo} alt="" />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link cus-style" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link cus-style" to="/services">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link cus-style" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link cus-style" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <div className="d-flex head-login-sec">
                  <div className="user-info d-flex">
                    <span>
                      <h5>{user.displayName}</h5>
                    </span>
                    {user.photoURL ? (
                      <span>
                        <img className="user-img" src={user.photoURL} alt="" />
                      </span>
                    ) : (
                      <span>
                        <img className="user-img" src={userimg} alt="" />
                      </span>
                    )}
                  </div>
                  {user.email ? (
                    <button
                      className="m-2 login head-btn p-2 btn ml-2"
                      onClick={logout}
                    >
                      Sign Out
                    </button>
                  ) : (
                    <NavLink className="btn login head-btn" to="/login">
                      Login
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
};

export default Header;