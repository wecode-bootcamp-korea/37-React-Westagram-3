import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <i className="img fa-brands fa-instagram" />
          <span className="divider" />
          <span className="title">Westagram</span>
        </div>
        <div className="find">
          <input className="input" type="text" placeholder="검색" />
          <i className="icon fa-solid fa-magnifying-glass" />
        </div>
        <div className="icons">
          <i className="explore fa-regular fa-compass" />
          <i className="heart fa-regular fa-heart" />
          <img
            className="profile__img"
            src="/images/jangmoonjung/my__profile.jpg"
            alt="my__profile__img"
          />
        </div>
        <div className="menubox">
          <div className="triangle" />
          <div className="contents">
            <div className="profile">
              <div className="icon">
                <i className="user fa-regular fa-user" />
              </div>
              <div className="text">프로필</div>
            </div>
            <div className="save">
              <div className="icon">
                <i className="bookmark fa-regular fa-bookmark" />
              </div>
              <div className="text">저장됨</div>
            </div>
            <div className="settings">
              <div className="icon">
                <i className="setting fas fa-cog" />
              </div>
              <div className="text">설정</div>
            </div>
            <div className="logout">로그아웃</div>
          </div>
        </div>
        <div className="findbox">
          <div className="triangle" />
          <div className="contents" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
