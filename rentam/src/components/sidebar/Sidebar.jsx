import React, {useState} from 'react';
import icon from '../../assets/icon1.png'
import icon2 from '../../assets/iconDarkMode.jpeg'
import avatar from '../../assets/avatar2.jpeg'

import '../../App.css'
import './Sidebar.css'

const Sidebar = () => {
        const [isDarkMode, setIsDarkMode] = useState(true)
        const [isOpen, setIsOpen] = useState(true)
        const toggle = () => setIsOpen(!isOpen)
        const darkMode = () => setIsDarkMode(!isDarkMode)


  return (
    <>
    <nav style={{width: isOpen ? "250px" : "88px"}} className="sidebar">
      <style>
      {`
      .sidebar .text {
        opacity: ${isOpen ? "1" : "0"};
      }
      .sidebar header .toggle {
        right: ${isOpen ? "-25px" : "-25px"};
        opacity: ${isOpen ? "0" : "1"}
      }
      .sidebar header .toggle1 {
        right: ${isOpen ? "-25px" : "-13px"};
        opacity: ${isOpen ? "1" : "0"}
      }
      .sidebar .switch::before {
        left: ${isDarkMode ? "5px" : "24px"}
      }
      :root {
        --body-color: ${isDarkMode ? "#E4E9F7" : "#18191A"};
        --sidebar-color: ${isDarkMode ? "#FFF" : "#242526"};
        --primary-color: ${isDarkMode ? "#722ce4cc" : "#3A3B3C"};
        --primary-color-light: ${isDarkMode ? "#F6F5FF" : "#3A3B3C"};
        --toggle-color: ${isDarkMode ? "#242526" : "#FFF"};
        --text-color: ${isDarkMode ? "#707070" : "#CCC"};
            }
      .sidebar .text1 {
        opacity: ${isOpen ? "0" : "1"};
        background: ${isOpen ? "#FFF" : "#722ce4cc"};
        border-radius: ${isOpen ? "0" : "6px"};
        height: ${isOpen ? "" : "40px"};
        width: ${isOpen ? "" : "50px"};
        justify-content: ${isOpen ? "" : "center"};
        align-items: ${isOpen ? "" : "center"}
      }
      .sidebar .name {
        color: ${isOpen ? "" : "#FFF"};
        font-weight: ${isOpen ? "" : "bold"}
      }
      .sidebar ~ .home {
        left: ${isOpen ? "250px" : "88px"};
        width: ${isOpen ? "calc(100% - 250px)" : "calc(100% - 88px)"};
      }
      .sidebar .logo1 {
        display: ${isDarkMode ? "flex" : "none"}
      }
      .sidebar .logo2 {
        display: ${isDarkMode ? "none" : "flex"}
      }
      .menu-bar .mode i.sun {
        opacity: ${isDarkMode ? "0" : "1"}
      }
      .menu-bar .mode i.moon {
        opacity: ${isDarkMode ? "1" : "0"}
      }
    `}
      </style>
      <header>
        <div className="image-text">
          <span style={{display: isOpen ? "block" : "none"}} className="image">
            <img src={icon} alt="RentAm" id='side-icon' className='logo1'/>
            <img src={icon2} alt="RentAm" id='side-icon' className='logo2'/>
          </span>

          <div className="text text1 header-text">
            <span className="name">RM</span>
          </div>
        </div>

        <i onClick={toggle} className="bi bi-chevron-right toggle"></i>
        <i onClick={toggle} className="bi bi-chevron-left toggle toggle1"></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
            <li className="search-box">
                <i class="bi bi-search icon"></i>
                <input type="search" placeholder='Search here' />
            </li>
          <ul className="menu-links">
            <li className="menu-link">
              <a href="#">
                <i class="bi bi-grid-fill icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="menu-link">
              <a href="#">
                <i class="bi bi-compass-fill icon"></i>
                <span className="text nav-text">Explore</span>
              </a>
            </li>
            <li className="menu-link">
              <a href="#">
                <i class="bi bi-cart-fill icon"></i>
                <span className="text nav-text">My Order</span>
              </a>
            </li>
            <li className="menu-link">
              <a href="#">
                <i class="bi bi-chat-dots-fill icon"></i>
                <span className="text nav-text">Message</span>
              </a>
            </li>
            <li className="menu-link">
              <a href="#">
                <i class="bi bi-person-circle icon"></i>
                <span className="text nav-text">My Profile</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <a href="#">
            <i class="bi bi-box-arrow-left icon"></i>
                <span className="text nav-text">Logout</span>
            </a>
          </li>
          <li className="mode">
            <div className="moon-sun">
            <i class="bi bi-moon icon moon"></i>
            <i class="bi bi-sun icon sun"></i>
            </div>
            <span className="mode-text text">{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
            <div className="toggle-switch">
              <span onClick={darkMode} className="switch"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>

    <section className="home">
      <nav className="navbar">
        <span className="search-icon">
          <i class="bi bi-search icon"></i>
          <input type="search" placeholder='Search here' />
        </span>
          <span className='end'>
            <i className="bi bi-bell-fill icon"></i>
            <div className="profile-image">
              <img src={avatar} alt="Profile" />
            </div>
          </span>
      </nav>
    </section>
    </>

  );
};

export default Sidebar;
