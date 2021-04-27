import React from 'react';
import './header.css';

const Header = () => {
  return (
    <>
      <div className="header-block">
        <h3 className="header-title">
          <a href="1">Game of Thrones DB</a>
        </h3>
        <ul className="header-links">
          <li>
            <a href="1">Characters</a>
          </li>
          <li>
            <a href="1">Houses</a>
          </li>
          <li>
            <a href="1">Books</a>   
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;