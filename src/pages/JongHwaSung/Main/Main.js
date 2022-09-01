import React, { useState } from 'react';
import './Main.scss';
import '../../../styles/reset.scss';

import Comment from '../Comment';

function MainSung() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const commentChange = e => {
    setComment(e.target.value);
  };

  const commentSubmit = e => {
    e.preventDefault();
    setComments(cur => [...cur, comment]);
    setComment('');
  };

  return (
    <React.Fragment>
      <nav>
        <div className="navLeft">
          <img
            src="/images/sungjonghwa/instagram.png"
            className="instargram"
            alt=""
          />
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
          <img
            src="/images/sungjonghwa/profile.jpg"
            className="profileImage"
            alt=""
          />
        </div>
      </nav>
      <div id="wrap">
        <section className="main">
          <div className="feeds">
            <article>
              <div className="articleHead">
                <img
                  src="images/sungjonghwa/Octocat.jpg"
                  className="dog"
                  alt=""
                />
                <span className="fontBolder">sungjonghwa</span>
              </div>

              <img
                src="/images/sungjonghwa/myimage.jpg"
                className="myimage"
                alt=""
              />

              <div className="fontawsome">
                {/* <!-- <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    <i class="fa-regular fa-bookmark"></i> --> */}

                <img
                  src="/images/sungjonghwa/heart-regular.svg"
                  className="heart"
                  alt=""
                />
                <img
                  src="/images/sungjonghwa/comment-regular.svg"
                  className="comment"
                  alt=""
                />
                <img
                  src="/images/sungjonghwa/arrow-up-from-bracket-solid.svg"
                  className="arrow"
                  alt=""
                />
                <img
                  src="/images/sungjonghwa/bookmark-regular.svg"
                  className="bookmaker"
                  alt=""
                />
              </div>

              <p>
                <img
                  src="/images/sungjonghwa/Octocat.jpg"
                  className="feedLike"
                  alt=""
                />
                <span className="fontBolder">aineworl</span>님{' '}
                <span className="fontBolder">외 10명</span>이 좋아합니다.
              </p>
              <p>
                <span className="fontBolder">sungjonghwa</span> 제주도 여행...
              </p>

              {/* <ul>
              {comments.map((e) => (<li>{e}</li>) )}
              </ul> */}

              {/* {comments.map((Comment) => (<li>{Comment}</li>) )} */}

              {comments.map((e, index) => (
                <Comment Props={e} key={index} />
              ))}

              <div className="nameList"></div>
              <form className="comment_form" onSubmit={commentSubmit}>
                <input
                  type="text"
                  className="comment_input"
                  placeholder="답글달기..."
                  onChange={commentChange}
                  value={comment}
                />
                <button className="comment_button">게시</button>
              </form>
            </article>
          </div>

          <div className="main-right">
            <div className="rightHeader">
              <img
                src="/images/sungjonghwa/Octocat.jpg"
                className="githubImage"
                alt=""
              />
              <div>
                <span>
                  Git&Github
                  <br />
                  Git | 깃허브
                </span>
              </div>
            </div>

            <div className="stroy">
              <div className="storyHeader">
                <span>스토리</span>
                <span className="fontBolder">모두보기</span>
              </div>

              <div className="content">
                <div className="flex">
                  <img
                    src="/images/sungjonghwa/blackImage.jpeg"
                    className="blackImage"
                    alt=""
                  />
                  <div>
                    <span>alksdjflkasdjflk</span>
                    <br />
                    <span className="gray">3분전</span>
                  </div>
                </div>

                <div className="flex">
                  <img
                    src="/images/sungjonghwa/blackImage.jpeg"
                    className="blackImage"
                    alt=""
                  />
                  <div>
                    <span>alksdjflkasdjflk</span>
                    <br />
                    <span className="gray">1시간전</span>
                  </div>
                </div>

                <div className="flex">
                  <img
                    src="/images/sungjonghwa/blackImage.jpeg"
                    className="blackImage"
                    alt=""
                  />
                  <div>
                    <span>alksdjflkasdjflk</span>
                    <br />
                    <span className="gray">2시간전</span>
                  </div>
                </div>

                <div className="flex">
                  <img
                    src="/images/sungjonghwa/blackImage.jpeg"
                    className="blackImage"
                    alt=""
                  />
                  <div>
                    <span>alksdjflkasdjflk</span>
                    <br />
                    <span className="gray">3시간전</span>
                  </div>
                </div>

                <div className="flex">
                  <img
                    src="/images/sungjonghwa/blackImage.jpeg"
                    className="blackImage"
                    alt=""
                  />
                  <div>
                    <span>alksdjflkasdjflk</span>
                    <br />
                    <span className="gray">4시간전</span>
                  </div>
                </div>

                <div className="flex">
                  <img
                    src="/images/sungjonghwa/blackImage.jpeg"
                    className="blackImage"
                    alt=""
                  />
                  <div>
                    <span>alksdjflkasdjflk</span>
                    <br />
                    <span className="gray">5시간전</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="recommend">
              <div className="storyHeader">
                <span>회원님을 위한 추천</span>
                <span className="fontBolder">모두보기</span>
              </div>

              <div className="content">
                <div className="flex">
                  <img
                    src="/images/sungjonghwa/blackImage.jpeg"
                    className="blackImage"
                    alt=""
                  />
                  <div>
                    <span>alksdjflkasdjflk</span>
                    <br />
                    <span className="gray">asdfadsf외 4명이....</span>
                    <span className="follow">팔로우</span>
                  </div>
                </div>

                <div className="flex">
                  <img
                    src="/images/sungjonghwa/blackImage.jpeg"
                    className="blackImage"
                    alt=""
                  />
                  <div>
                    <span>utyityutyutylk</span>
                    <br />
                    <span className="gray">asdfadsf외 4명이....</span>
                    <span className="follow">팔로우</span>
                  </div>
                </div>

                <div className="flex">
                  <img
                    src="/images/sungjonghwa/blackImage.jpeg"
                    className="blackImage"
                    alt=""
                  />
                  <div>
                    <span>hjdhgfdfghlk</span>
                    <br />
                    <span className="gray">asdfadsf외 4명이....</span>
                    <span className="follow">팔로우</span>
                  </div>
                </div>
              </div>
            </div>
            <p></p>
            <span className="gray">
              Instargram 정보ㆍ지원ㆍ홍보 센터ㆍAPIㆍ채용
              정보ㆍ개인정보처리방침ㆍ양관ㆍ디렉터리ㆍ프로필ㆍ해시태그ㆍ언어
            </span>
            <br />
            <span className="gray">@ 2022 Instargram</span>
          </div>
        </section>
      </div>

      <div className="dd">
        <div className="profileMenu">
          <i className="fa-solid fa-user"></i> 프로필
        </div>
        <div className="profileMenu">
          <i className="fa-regular fa-bookmark"></i> 저장됨
        </div>
        <div className="profileMenu">
          <i className="fa-solid fa-gear"></i> 설정
        </div>
        <div className="profileMenu">로그아웃</div>
      </div>
    </React.Fragment>
  );
}

export default MainSung;
