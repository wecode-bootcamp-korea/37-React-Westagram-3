import React from 'react';
import '../Main/Main.scss';
import Header from './components/Header/Header';
import Feeds from './components/Feeds/Feeds';

function MainRa() {
  return (
    <div className="main">
      <Header />
      <main className="contents">
        <div className="wrapper">
          <div className="contents-box">
            <Feeds />
            <div className="main-right">
              <div className="right-profile">
                <div className="box">
                  <img
                    className="big-icon"
                    src="https://velog.velcdn.com/images/rayong/profile/df592861-ea43-432c-aea2-a1f79730300b/image.png"
                    alt=""
                  />
                  <p>
                    <strong>WECODE_FIRE</strong>
                    <br />
                    wecode is forever
                  </p>
                </div>
              </div>
              <div className="right-story">
                <div className="box">
                  <div className="right-story-top">
                    <p>스토리</p>
                    <p>
                      <strong>모두 보기</strong>
                    </p>
                  </div>
                  <ul className="list">
                    <li>
                      <img
                        className="right-story-img"
                        src="https://velog.velcdn.com/images/rayong/profile/df592861-ea43-432c-aea2-a1f79730300b/image.png"
                        alt=""
                      />
                      <p>
                        <strong>rayong</strong>
                        <br />
                        12시간 전
                      </p>
                    </li>
                    <li>
                      <img
                        className="right-story-img"
                        src="https://velog.velcdn.com/images/rayong/profile/df592861-ea43-432c-aea2-a1f79730300b/image.png"
                        alt=""
                      />
                      <p>
                        <strong>rayong</strong>
                        <br />
                        12시간 전
                      </p>
                    </li>
                    <li>
                      <img
                        className="right-story-img"
                        src="https://velog.velcdn.com/images/rayong/profile/df592861-ea43-432c-aea2-a1f79730300b/image.png"
                        alt=""
                      />
                      <p>
                        <strong>rayong</strong>
                        <br />
                        12시간 전
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right-suggest">
                <div className="box">
                  <div className="right-suggest-top">
                    <p>회원님을 위한 추천</p>
                    <p>
                      <strong>모두 보기</strong>
                    </p>
                  </div>
                  <ul className="list">
                    <li>
                      <div>
                        <img
                          className="right-suggest-img"
                          src="https://velog.velcdn.com/images/rayong/profile/df592861-ea43-432c-aea2-a1f79730300b/image.png"
                          alt=""
                        />
                        <p>
                          <strong>rayong</strong>
                          <br />
                          12시간 전
                        </p>
                      </div>
                      <p>팔로우</p>
                    </li>
                    <li>
                      <div>
                        <img
                          className="right-suggest-img"
                          src="https://velog.velcdn.com/images/rayong/profile/df592861-ea43-432c-aea2-a1f79730300b/image.png"
                          alt=""
                        />
                        <p>
                          <strong>rayong</strong>
                          <br />
                          12시간 전
                        </p>
                      </div>
                      <p>팔로우</p>
                    </li>
                    <li>
                      <div>
                        <img
                          className="right-suggest-img"
                          src="https://velog.velcdn.com/images/rayong/profile/df592861-ea43-432c-aea2-a1f79730300b/image.png"
                          alt=""
                        />
                        <p>
                          <strong>rayong</strong>
                          <br />
                          12시간 전
                        </p>
                      </div>
                      <p>팔로우</p>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="right-subtext">
                instagram 정보, 지원, 홍보센터, API, 채용 정보,
                개인정보처리방침, 약관, 디렉터리, 프로필, 해시태그, 언어
              </p>
              <p className="right-cc">@ 2019 INSTARGRAM</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainRa;
