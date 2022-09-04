import React from 'react';

function MainRight(props) {
  return (
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
          <div className="top">
            <p>스토리</p>
            <p>
              <strong>모두 보기</strong>
            </p>
          </div>
          <ul className="list">
            <li>
              <img
                className="profile"
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
                className="profile"
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
                className="profile"
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
          <div className="top">
            <p>회원님을 위한 추천</p>
            <p>
              <strong>모두 보기</strong>
            </p>
          </div>
          <ul className="list">
            <li>
              <div>
                <img
                  className="profile"
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
                  className="profile"
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
                  className="profile"
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
        instagram 정보, 지원, 홍보센터, API, 채용 정보, 개인정보처리방침, 약관,
        디렉터리, 프로필, 해시태그, 언어
      </p>
      <p className="right-cc">@ 2019 INSTARGRAM</p>
    </div>
  );
}

export default MainRight;
