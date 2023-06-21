import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min' // Add this line to import Bootstrap JavaScript

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark topnavbar'>
      <div className='container-fluid'>
        <h1>CCSS</h1>

        <button className='navbar-toggler' type='button' onClick={toggleMenu}>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end links ${
            isMenuOpen ? 'show' : ''
          }`}
        >
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                exact
                to='/'
                className='nav-link link'
                activeClassName='active'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/analysis'
                className='nav-link link'
                activeClassName='active'
              >
                Image Analysis
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/records'
                className='nav-link link'
                activeClassName='active'
              >
                Patient Records
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/analytics'
                className='nav-link link'
                activeClassName='active'
              >
                Data Analytics
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/about'
                className='nav-link link'
                activeClassName='active'
              >
                About Us
              </NavLink>
            </li>
            {/* Profile Dropdown */}
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle link'
                to='/'
                id='profileDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='fas fa-user'></i> {/* Font Awesome user icon */}
              </a>
              <ul
                className='dropdown-menu dropdown-menu-end'
                aria-labelledby='profileDropdown'
              >
                <li>
                  <NavLink
                    to='/signin'
                    className='dropdown-item'
                    activeClassName='selected'
                  >
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/signup'
                    className='dropdown-item'
                    activeClassName='selected'
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/editprofile'
                    className='dropdown-item'
                    activeClassName='selected'
                  >
                    Edit Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/logout'
                    className='dropdown-item'
                    activeClassName='selected'
                  >
                    Log Out
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
