import React from 'react';
import RightFooter from './RightFooter/RightFooter';
import '../MainRight/MainRight.scss';

function MainRight({ userFeedInfo }) {
  return (
    <div className="mainRight">
      <div className="rightProfile">
        <div className="box">
          <img
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
      <div className="rightStory">
        <div className="box">
          <div className="top">
            <p>스토리</p>
            <p>
              <strong>모두 보기</strong>
            </p>
          </div>
          <ul className="list">
            {userFeedInfo.map(feedInfo => {
              return (
                <li key={feedInfo.userId}>
                  <img className="profile" src={feedInfo.profileImg} alt="" />
                  <p>
                    <strong>{feedInfo.userName}</strong>
                    <br />
                    {feedInfo.beforeTime}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="rightSuggest">
        <div className="box">
          <div className="top">
            <p>회원님을 위한 추천</p>
            <p>
              <strong>모두 보기</strong>
            </p>
          </div>
          <ul className="list">
            {userFeedInfo.map(feedInfo => {
              return (
                <li key={feedInfo.userId}>
                  <div>
                    <img className="profile" src={feedInfo.profileImg} alt="" />
                    <p>
                      <strong>{feedInfo.userName}</strong>
                      <br />
                      {feedInfo.beforeTime}
                    </p>
                  </div>
                  <p>팔로우</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <RightFooter />
      <p className="rightCopy">@ 2019 INSTARGRAM</p>
    </div>
  );
}

export default MainRight;
