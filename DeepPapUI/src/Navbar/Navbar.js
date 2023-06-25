import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css';
import auth from '../config/firebase-config';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
     
    auth.onAuthStateChanged((user) => {
      
      if (user)
        setIsLoggedIn(true);
      
      else 
        setIsLoggedIn(false);

    });
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const signOutHandler = async (e) => {
    await auth.signOut();
    navigate("/signin");
  }

  return (
    <nav className={`navbar fixed-top navbar-expand-lg navbar-dark mb-0 topnavbar ${isHomePage ? 'topnavbar-home' : ''} `}>
      <div className="container-fluid">
        <h1>DeepPap</h1>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end links ${
            isMenuOpen ? 'show' : ''
          }`}
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link link" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/patientinformation" className="nav-link link" activeclassname="active">
                Image Analysis
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/patientrecord" className="nav-link link" activeclassname="active">
                Patient Records
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/analytics" className="nav-link link" activeclassname="active">
                Data Analytics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link link" activeclassname="active">
                About Us
              </NavLink>
            </li>
            {/* Profile Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle link"
                to="/"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                
              >
                <i className="fas fa-user"></i> {/* Font Awesome user icon */}
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">

                {(!isLoggedIn) && 
                ( 
                  <>
                    <li>
                        <NavLink to="/signin" className="dropdown-item" activeclassname="selected">Sign In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup" className="dropdown-item" activeclassname="selected">Sign Up</NavLink>
                    </li>
                  </>
                )
                }

                {(isLoggedIn) &&
                  <>
                    <li>
                      <NavLink to="/editprofile" className="dropdown-item" activeclassname="selected">Edit Profile</NavLink>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={ signOutHandler }>Log Out</button>
                    </li>
                  </>
                }

              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;