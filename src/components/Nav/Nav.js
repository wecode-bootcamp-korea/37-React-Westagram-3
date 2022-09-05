import React from 'react';
import './../Nav/Nav.scss';

function Nav() {
  return (
    <nav>
      <div className="navLeft">
        <img src="images/instagram.png" className="instargram" alt="" />
        <span className="fontBolder">|</span>
        <span className="logo">Westagram</span>
      </div>

      <input className="search" type="text" placeholder="검색" />

      <div className="navRight">
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt=""
        />
        <img
          src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt=""
        />
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt=""
        />
        <img src="images/profile.jpg" className="profileImage" alt="" />
      </div>
    </nav>
  );
}

export default Nav;
