import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

import { ARRAY } from '../uiData';
import Comment from '../Comment';

function Main() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(response => response.json())
      .then(result => setFeedList(result));
  }, []);
  console.log(feedList); // Mock Data 받아오는법

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
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA1MDdfMTc4%2FMDAxNTU3MTU3MzEwODYy.Nq0UxSCWDgdYGyoKCOZd9s874PfeVKIkHJ00tE4AT1sg.ZjLgQUDl-CSQdcu5PNvlNwAxt4UShtCWcv_U-JcVSJAg.PNG.mymiz1004%2F%25C0%25CE%25BD%25BA%25C5%25B8%25B1%25D7%25B7%25A5_%25C8%25E6%25B9%25E9.PNG&type=a340"
            className="instargram"
            alt="로고"
          />
          <span className="fontBolder">|</span>
          <span className="logo">Westagram</span>
        </div>

        <input className="search" type="text" placeholder="검색" />

        <div className="navRight">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="나침반"
          />
          <img
            src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="사람"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="사람"
          />
          <img
            src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MDVfMTE4%2FMDAxNjU0Mzc4OTYzMzgx.Hl8i36G_g4fiU5R22A4ujdAVenCkQpuTjGmdQjO1hdog.5WoHzM0Fdxpm9vz1KBbcqqqyyhwS4hXLF_TacKtS1fAg.JPEG.mungu0302%2F2022280097_%25B0%25AD%25B9%25CE%25BC%25AD_%25BF%25AC%25BD%25C0.jpg&type=a340"
            className="profileImage"
            alt="프로필"
          />
        </div>
      </nav>
      <div id="wrap">
        <section className="main">
          <div>
            {feedList.map((e, index) => {
              return (
                <div className="feeds" key={index}>
                  <article>
                    <div className="articleHead">
                      <img src={e.userImage} className="dog" alt="프사" />
                      <span className="fontBolder">{e.userName}</span>
                    </div>

                    <img src={e.userImage} className="myimage" alt="프사" />

                    <div className="fontawsome">
                      {/* <!-- <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    <i class="fa-regular fa-bookmark"></i> --> */}

                      <img
                        src="images/heart-regular.svg"
                        className="heart"
                        alt="하트"
                      />
                      <img
                        src="images/comment-regular.svg"
                        className="comment"
                        alt="저장"
                      />
                      <img
                        src="images/arrow-up-from-bracket-solid.svg"
                        className="arrow"
                        alt="화살표"
                      />
                      <img
                        src="images/bookmark-regular.svg"
                        className="bookmaker"
                        alt="북마크"
                      />
                    </div>

                    <p>
                      <img src={e.userImage} className="feedLike" alt="프사" />
                      <span className="fontBolder">aineworl</span>님{' '}
                      <span className="fontBolder">외 10명</span>이 좋아합니다.
                    </p>
                    <p>
                      <span className="fontBolder">{e.userName}</span>{' '}
                      {e.comment}
                    </p>

                    {/* <ul>
              {comments.map((e) => (<li>{e}</li>) )}
              </ul> */}

                    {/* {comments.map((Comment) => (<li>{Comment}</li>) )} */}

                    {comments.map((e, index) => (
                      <Comment Props={e} key={index} />
                    ))}

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
              );
            })}
          </div>
          <div className="main-right">
            <div className="rightHeader">
              <img
                src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2Fef%2Fff%2F7d%2Fefff7d5cb146fb3ca0f62b87bd641e4d.jpg&type=sc960_832"
                className="githubImage"
                alt="깃허브"
              />
              <div>
                <span>
                  Git&Github
                  <br />
                  Git | 깃허브
                </span>
              </div>
            </div>

            <div className="story">
              <div className="storyHeader">
                <span>스토리</span>
                <span className="fontBolder">모두보기</span>
              </div>

              <div className="content">
                <div className="flex">
                  <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2021_04_08_1981%2Fead5c501-986c-11eb-a5bd-246e963a4708_01.jpg&type=sc960_832"
                    className="blackImage"
                    alt="검정색"
                  />
                  <div>
                    <span>alksdjflkasdjflk</span>
                    <br />
                    <span className="gray">3분전</span>
                  </div>
                </div>

                <div className="flex">
                  <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2021_04_08_1981%2Fead5c501-986c-11eb-a5bd-246e963a4708_01.jpg&type=sc960_832"
                    className="blackImage"
                    alt="검정색"
                  />
                  <div>
                    <span>alksdjflkasdjflk</span>
                    <br />
                    <span className="gray">1시간전</span>
                  </div>
                </div>

                <div className="flex">
                  <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2021_04_08_1981%2Fead5c501-986c-11eb-a5bd-246e963a4708_01.jpg&type=sc960_832"
                    className="blackImage"
                    alt="검정색"
                  />
                  <div>
                    <span>alksdjflkasdjflk</span>
                    <br />
                    <span className="gray">2시간전</span>
                  </div>
                </div>

                <div className="flex">
                  <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2021_04_08_1981%2Fead5c501-986c-11eb-a5bd-246e963a4708_01.jpg&type=sc960_832"
                    className="blackImage"
                    alt="검정색"
                  />
                  <div>
                    <span>alksdjflkasdjflk</span>
                    <br />
                    <span className="gray">3시간전</span>
                  </div>
                </div>

                <div className="flex">
                  <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2021_04_08_1981%2Fead5c501-986c-11eb-a5bd-246e963a4708_01.jpg&type=sc960_832"
                    className="blackImage"
                    alt="검정색"
                  />
                  <div>
                    <span>alksdjflkasdjflk</span>
                    <br />
                    <span className="gray">4시간전</span>
                  </div>
                </div>

                <div className="flex">
                  <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2021_04_08_1981%2Fead5c501-986c-11eb-a5bd-246e963a4708_01.jpg&type=sc960_832"
                    className="blackImage"
                    alt="검정색"
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
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2021_04_08_1981%2Fead5c501-986c-11eb-a5bd-246e963a4708_01.jpg&type=sc960_832"
                    className="blackImage"
                    alt="검정색"
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
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2021_04_08_1981%2Fead5c501-986c-11eb-a5bd-246e963a4708_01.jpg&type=sc960_832"
                    className="blackImage"
                    alt="검정색"
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
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2021_04_08_1981%2Fead5c501-986c-11eb-a5bd-246e963a4708_01.jpg&type=sc960_832"
                    className="blackImage"
                    alt="검정색"
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
            <p />
            <span className="gray">
              {/* 상수 데이터 선언 map매소드 */}
              {ARRAY.map(List => {
                return (
                  <Link to="#!" key={List.id}>
                    {List.name}
                  </Link>
                );
              })}
            </span>
            <br />
            <span className="gray">@ 2022 Instargram</span>
          </div>
        </section>
      </div>

      {/* <div className="dd">
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
      </div> */}
    </React.Fragment>
  );
}

export default Main;

// const ARRAY = [
//   {id:1, name:"소개ㆍ"},
//   {id:2, name:"도움말ㆍ"},
//   {id:3, name:"홍보 센터ㆍ"},
//   {id:4, name:"APIㆍ"},
//   {id:5, name:"채용 정보ㆍ"},
//   {id:5, name:"개인정보처리방침ㆍ"},
//   {id:5, name:"약관ㆍ"},
//   {id:5, name:"위치ㆍ"},
//   {id:5, name:"인기 계정ㆍ"},
//   {id:5, name:"해시태그ㆍ"},
//   {id:5, name:"언어ㆍ"},
// ]
