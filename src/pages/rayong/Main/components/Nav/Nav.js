import React from 'react';

function Nav(props) {
  return (
    <nav className="header">
      <div className="wrapper">
        <div className="header-box">
          <div className="logo-box">
            <img
              className="icon"
              src="/images/rayong/logo.png"
              alt="westagram-logo"
            />
            <p>Westagram</p>
          </div>
          <div className="input-box">
            <input id="search-inputbox" type="text" placeholder="검색" />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <div className="icon-box">
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
