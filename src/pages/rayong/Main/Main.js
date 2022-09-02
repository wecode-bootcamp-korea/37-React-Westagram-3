import React, { useState } from 'react';
import '../Main/Main.scss';

function MainRa() {
  const [commentsValue, setCommentsValue] = useState('');
  const [commentsArr, setCommentsArr] = useState([]);

  const saveComments = event => {
    setCommentsValue(event.target.value);
  };

  const makeCommentsArr = event => {
    event.preventDefault();
    setCommentsArr(cur => [...cur, commentsValue]);
    setCommentsValue('');
  };

  function AddComments() {
    let commentsList = commentsArr.map((Comments, index) => {
      return (
        <li key={Comments.id}>
          <span>
            <strong>wecode</strong>
            {Comments}
          </span>
          <div>
            <i className="fa-solid fa-heart" />
            <i className="fa-regular fa-circle-xmark" />
          </div>
        </li>
      );
    });
    return commentsList;
  }

  return (
    <div className="main">
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
      <main className="contents">
        <div className="wrapper">
          <div className="contents-box">
            <div className="feeds">
              <article className="feeds-box">
                <div className="feeds-profile">
                  <div className="box">
                    <div className="user">
                      <img
                        src="https://velog.velcdn.com/images/rayong/profile/df592861-ea43-432c-aea2-a1f79730300b/image.png"
                        alt="프로필이미지"
                      />
                      <p>wecode_dd</p>
                    </div>
                    <i className="fa-regular fa-compass fa-xl" />
                  </div>
                </div>
                <div className="feeds-img" />
                <div className="feeds-icons">
                  <div className="box">
                    <div className="left">
                      <i className="fa-regular fa-heart fa-xl" />
                      <i className="fa-regular fa-comment fa-xl" />
                      <i className="fa-regular fa-envelope fa-xl" />
                    </div>
                    <div className="right">
                      <i className="fa-regular fa-bookmark fa-xl" />
                    </div>
                  </div>
                </div>
                <div className="feeds-likes">
                  <div className="box">
                    <img
                      src="https://velog.velcdn.com/images/rayong/profile/df592861-ea43-432c-aea2-a1f79730300b/image.png"
                      alt=""
                    />
                    <p>
                      <strong>wecod</strong>님 외 <strong>10명</strong>이
                      좋아합니다.
                    </p>
                  </div>
                </div>
                <ul id="feedsList" className="feeds-list">
                  <AddComments />
                </ul>
                <form
                  onSubmit={makeCommentsArr}
                  id="feedsForm"
                  className="feeds-input"
                >
                  <input
                    onChange={saveComments}
                    id="feedsInput"
                    type="text"
                    placeholder="댓글 달기.."
                  />
                  <button id="feedsBtn">게시</button>
                </form>
              </article>
            </div>
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
