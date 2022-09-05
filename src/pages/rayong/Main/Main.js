import React from 'react';
import '../Main/Main.scss';
import Feeds from './components/Feeds/Feeds';
import MainRight from './components/MainRight/MainRight';

function MainRa() {
  return (
    <div className="main">
      <nav className="nav">
        <div className="wrapper">
          <div className="nav-box">
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
      <main className="contents">
        <div className="wrapper">
          <div className="contents-box">
            <Feeds />
            <MainRight />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainRa;
