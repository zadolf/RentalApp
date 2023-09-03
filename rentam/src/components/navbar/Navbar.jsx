import React from 'react'
import avatar from '../../assets/avatar.jpg'
import icon from '../../assets/icon1.png'

import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg" id='navbar'>
            <div className="container-fluid"> 
                <input
              className="form-control"
              id='nav-search'
              type="search"
              placeholder="Search here" // Bootstrap search icon class
              aria-label="Search"
            />
                <div className="collapse navbar-collapse justify-content-end" id="menus">
                <ul className="navbar-nav fw-bold">
                    <li className="nav-item">
                    <a className="nav-link" id='nav-link' href="#login"><i className="bi bi-bell-fill" id='bell'></i></a>
                    </li>
                    <li className="nav-item">
                        <img src={avatar} alt="Profile" className="nav-link" id='avatar'/>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar