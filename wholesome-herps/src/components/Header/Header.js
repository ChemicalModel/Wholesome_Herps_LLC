import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUser, FaQuestionCircle, FaHome, FaDragon } from 'react-icons/fa';

function Header() {
  return (
    <header className="mainHeader">
      <h1>Wholesome Herps</h1>
      <nav className="mainNav">
        <div className="navContainer">
          <ul className="navLinks">
            <li>
              <Link to="/AboutMe">
                <FaUser size={28} />
              </Link>
            </li>
            <li>
              <Link to="/FAQ">
                <FaQuestionCircle size={28} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaHome size={28} />
              </Link>
            </li>
            <li>
              <Link to="/Reptiles">
                <FaDragon size={28} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
