import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../images/filip-logo.png';
import '../App.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import resume from '../images/Cilecek_Filip_Zivotopis.pdf';

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <>
      <header className='main-nav'>
        <Link to='/'>
          <div className='signature'>
            <img src={logo} className='App-logo' alt='logo' />
            <div className='my-name'>
              <span>Filip</span>
              <br></br>
              <span>Cileček</span>
            </div>
          </div>
        </Link>
        <nav className='main-nav-links'>
          <ul className='nav-links'>
            <li>
              <Link to='/projekty'>Projekty</Link>
            </li>
            <li>
              <Link to='/znalosti'>Znalosti</Link>
            </li>
            <li>
              <Link to='/about-me'>About me</Link>
            </li>
          </ul>
          <FontAwesomeIcon
            icon={faBars}
            className='nav-burger'
            id='hidden-icon'
            onClick={() => {
              isHamburgerOpen
                ? setIsHamburgerOpen(false)
                : setIsHamburgerOpen(true);
            }}
          />
          <Link to={resume} id='nav-contact' download target='_blank'>
            <button>Životopis</button>
          </Link>
        </nav>
      </header>

      <div className='splitter'></div>

      <ul
        className='hamburger-links'
        id={`${isHamburgerOpen ? 'display-hamburger-links' : ''}`}
      >
        <li>
          <Link to='/projekty'>Projekty</Link>
        </li>
        <li>
          <Link to='/znalosti'>Znalosti</Link>
        </li>
        <li>
          <Link to='/about-me'>About me</Link>
        </li>
        <li>
          <Link to={resume} id='nav-contact' download target='_blank'>
            <button>Životopis</button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
