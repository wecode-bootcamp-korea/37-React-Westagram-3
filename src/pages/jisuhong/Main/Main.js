import React from 'react';
import { useState } from 'react';
import './Main.scss';

function MainHong() {
  const [comment, setComment] = useState('');
  const commentInput = event => setComment(event.target.value);

  const [commentsArr, setCommentsArr] = useState([]);
  const registerComment = event => {
    event.preventDefault();
    if (comment.length > 0) {
      setCommentsArr([...commentsArr, comment]);
      setComment('');
    }
  };

  return (
    <>
      <nav class="menu">
        <div class="navWrapper">
          <div className="logo">
            <img className="logoImg" src="./images/mainpage_logo.png" alt="" />
            <h1 className="logoText">Westagram</h1>
          </div>
          <div className="searchWrapper">
            <input className="searchBar" type="text" placeholder="검색" />
          </div>
          <div className="functions">
            <img className="icon" src="./images/explore.png" alt="" />
            <img className="icon" src="./images/heart.png" alt="" />
            <img className="icon" src="./images/user.png" alt="" />
          </div>
        </div>
      </nav>

      <main>
        <div className="feeds">
          <article>
            <div className="feed-info">
              <img
                className="feed-ProfileImg"
                src="./images/profile_img.jpg"
                alt=""
              />
              <p className="feed-username">Jisu_Hong</p>
              <div>
                <img className="option" src="./images/menu-dots.png" alt="" />
              </div>
            </div>
            <div className="feedContent">
              <img className="postedImg" src="./images/cat_feed.jpg" alt="" />
            </div>
            <div className="post-reactions">
              <div className="feed-functions">
                <img className="icons" src="./images/heart.png" alt="" />
                <img className="icons" src="./images/chat.png" alt="" />
                <img className="icons" src="./images/upload.png" alt="" />
                <img className="markIcons" src="./images/bookmark.png" alt="" />
              </div>
              <div className="likes">
                <img
                  className="likerProfile"
                  src="./images/dog_profile.jpg"
                  alt=""
                />
                <p className="likerName">
                  <b>dog_lover</b>님 <b>외 5명</b>이 좋아합니다
                </p>
              </div>
              <div className="post-description">
                <div className="posterName">
                  <b>Jisu_Hong</b>
                </div>
                <p className="postDescript">귀여운 고양이 🐱 📸</p>
              </div>
              <div className="commentWrapper">
                <ul className="commentLists">
                  <li>
                    <span>
                      <span class="commentId">
                        <b>dog_lover</b>
                      </span>
                      귀여워요! 🥹
                    </span>
                  </li>
                </ul>
              </div>
              <div className="commentTime">15분 전</div>
              <div className="comment" onSubmit={registerComment}>
                <input
                  className="writing_area"
                  type="text"
                  placeholder="댓글 달기..."
                  value={comment}
                  onChange={commentInput}
                />
                <button className="comment_button" onClick={registerComment}>
                  <b>게시</b>
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>
      <div class="main-right">
        <div className="profileCard">
          <img
            className="profileCard-Img"
            src="./images/profile_img.jpg"
            alt=""
          />
          <p className="profileCard-Id">
            <b>Jisu_Hong</b>
          </p>
        </div>
        <div className="storyLists">
          <div className="storyNav">
            <div className="storyTitle">
              <p>
                <b>스토리</b>
              </p>
            </div>
            <div className="showAllStory" onclick="location.href= '#'">
              <b>모두 보기</b>
            </div>
          </div>

          <div className="storyWrapper">
            <img className="profile-story" src="./images/hedgehog.jpg" alt="" />
            <div className="story-information">
              <div className="boldText">hedgehog_lover</div>
              <div className="story-time">2시간 전</div>
            </div>
          </div>
          <div className="storyWrapper">
            <img className="profile-story" src="./images/duck.jpg" alt="" />
            <div className="story-information">
              <div className="boldText">duck_lover</div>
              <div className="story-time">1분 전</div>
            </div>
          </div>
          <div className="storyWrapper">
            <img className="profile-story" src="./images/hamster.jpg" alt="" />
            <div className="story-information">
              <div className="boldText">hamster_lover</div>
              <div className="story-time">3시간 30분 전</div>
            </div>
          </div>
          <div className="storyWrapper">
            <img className="profile-story" src="./images/sloth.jpg" alt="" />
            <div className="story-information">
              <div className="boldText">sloth_lover</div>
              <div className="story-time">13시간 전</div>
            </div>
          </div>
        </div>

        <div className="recommendation">
          <div className="recommendNav">
            <p className="recommend-inform">
              <b>회원님을 위한 추천</b>
            </p>
            <div className="showAllRecommend" onclick="location.href= '#'">
              <b>모두 보기</b>
            </div>
          </div>
          <div className="recommendLists">
            <div className="recommendWrapper">
              <img
                className="recommend-profile"
                src="./images/cat-owner.jpg"
                alt=""
              />
              <div className="boldText">
                <p>catowner01</p>
              </div>
              <div className="follow-information">
                <p>회원님을 팔로우합니다</p>
              </div>
              <div className="followBtn">
                <button class="follow-button">팔로우</button>
              </div>
            </div>
            <div className="recommendWrapper">
              <img
                className="recommend-profile"
                src="./images/animal shelter.jpg"
                alt=""
              />
              <div className="boldText">
                <p>animal_shelter</p>
              </div>
              <div className="follow-information">
                <p>dog_lover님 외 3명이...</p>
              </div>
              <div className="followBtn">
                <button class="follow-button">팔로우</button>
              </div>
            </div>
            <div className="recommendWrapper">
              <img
                className="recommend-profile"
                src="./images/cat-product.jpg"
                alt=""
              />
              <div className="boldText">
                <p>cat_products</p>
              </div>
              <div className="follow-information">
                <p>회원님을 팔로우합니다</p>
              </div>
              <div className="followBtn">
                <button class="follow-button">팔로우</button>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p>
            Instagram 정보 · 지원 · 홍보센터 · API ·<br />
            채용정보 · 개인정보처리방침 · 약관 ·<br />
            디렉터리 · 프로필 · 해시태그 · 언어
          </p>
          <br />
          <p>ⓒ 2022 INSTAGRAM</p>
        </footer>
      </div>
    </>
  );
}

export default MainHong;
