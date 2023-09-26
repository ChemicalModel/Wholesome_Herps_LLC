import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Header content</h1>
      <nav>
        <ul>
          <li>
            <Link to="/AboutMe">About Me</Link>
          </li>
          <li>
            <Link to="/FAQ">FAQ</Link>
          </li>
            <Link to ="/Homepage">Home</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;