import React from 'react';
import './../Nav/Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="wrapper">
        <div className="navBox">
          <div className="logoBox">
            <img
              className="icon"
              src="/images/rayong/logo.png"
              alt="westagram-logo"
            />
            <p>Westagram</p>
          </div>
          <div className="inputBox">
            <input id="search-inputbox" type="text" placeholder="검색" />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <div className="iconBox">
            <i className="fa-regular fa-compass fa-xl" />
            <i className="fa-regular fa-heart fa-xl" />
            <i className="fa-regular fa-user fa-xl" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
