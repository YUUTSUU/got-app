import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <React.Fragment>
      <div className="header-block">
        <h3 className="header-title">
          <Link to='/'>Game of Thrones DB</Link>
        </h3>
        <ul className="header-links">
          <li>
            <Link to="/characters/">Characters</Link>
          </li>
          <li>
            <Link to="/houses/">Houses</Link>
          </li>
          <li>
            <Link to="/books/">Books</Link>   
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Header;