import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import ReplyLists from './components/ReplyLists';
import { FOOTER_LIST } from '../Main/components/FooterList';
import './Main.scss';

function MainJang() {
  const [replyValue, setReplyValue] = useState('');
  const [replyArray, setReplyArray] = useState([]);
  const [replyDisable, setReplyDisable] = useState(true);
  const [replyActive, setReplyActive] = useState(false);
  const replyInput = event => {
    setReplyValue(event.target.value);
  };
  const replyValidation = () => {
    if (replyValue.trim().length > 0) {
      setReplyActive(true);
      setReplyDisable(false);
    } else {
      setReplyActive(false);
      setReplyDisable(true);
    }
  };
  const replyRegist = event => {
    // 다른 이벤트가 발생하지 않도록
    event.preventDefault();
    // 빈 글일 때는 버튼 비활성화
    if (replyValue.trim().length === 0) {
      setReplyActive(false);
      setReplyDisable(true);
      return;
    } else {
      setReplyArray([...replyArray, replyValue]);
      setReplyValue('');
    }
  };
  const [feedsInfoList, setFeedsInfoList] = useState([]);
  useEffect(() => {
    fetch('/data/feedsData.json').then(response => {
      response.json().then(result => setFeedsInfoList(result));
    });
  }, []);

  return (
    <>
      <Nav />
      <main className="main">
        <div className="container">
          <div className="feeds">
            {/* <article className="container">
              <div className="header">
                <div className="profile">
                  <img
                    className="profile__img"
                    src="/images/jangmoonjung/feeds__profile.jpg"
                    alt="feeds__profile__img"
                  />
                  <div className="id">canon_mj</div>
                </div>
                <div className="more">
                  <i className="more__icon fas fa-ellipsis-h" />
                </div>
              </div>
              <img
                className="feeds__img"
                src="/images/jangmoonjung/feeds__img.jpg"
                alt="feeds__img"
              />
              <div className="contents">
                <div className="icons">
                  <div className="left">
                    <i className="heart far fa-heart" />
                    <i className="comment fa-regular fa-comment" />
                    <i className="plane fa-regular fa-paper-plane" />
                  </div>
                  <div className="right">
                    <i className="bookmark fa-regular fa-bookmark" />
                  </div>
                </div>
                <div className="likes">
                  <div className="image">
                    <img
                      className="likes__img"
                      src="/images/jangmoonjung/likes__profile.jpg"
                      alt="feeds__likes__img"
                    />
                  </div>
                  <div className="text">
                    <span className="id">aineworld</span>님 외
                    <span className="people">10명</span>이 좋아합니다
                  </div>
                </div>
                <div className="texts">
                  <div className="content">
                    <div className="id">canon_mj</div>
                    <div className="text" />
                    위워크에서 진행한 베이킹 클래스...
                  </div>
                  <div className="more__gray">더보기</div>
                </div>
                <div className="newReply">
                  <div className="texts__reply">
                    <div className="texts__reply__left">
                      <div className="id">neceosecius</div>
                      <div className="text">거봐 좋았잖아~~~~😛</div>
                    </div>
                    <div className="texts__reply__right">
                      <i className="texts__heart fa-regular fa-heart" />
                      <i className="texts__remove fa-regular fa-trash-can" />
                    </div>
                  </div>
                  {replyArray.map((value, index) => {
                    return <ReplyLists key={index} content={value} />;
                  })}
                </div>
                <div className="time">
                  <span className="more__gray time__before">42분전</span>
                </div>
              </div>
              <form onSubmit={replyRegist} className="reply">
                <input
                  value={replyValue}
                  onChange={e => {
                    replyInput(e);
                    replyValidation();
                  }}
                  className="input"
                  type="text"
                  placeholder="댓글 달기...."
                />
                <button
                  onClick={replyRegist}
                  disabled={replyDisable}
                  type="button"
                  className={replyActive ? 'textBtnActive' : 'textBtnUnactive'}
                >
                  게시
                </button>
              </form>
            </article> */}
            {feedsInfoList.map(feedsInfo => {
              return (
                <article key={feedsInfo.id} className="container">
                  <div className="header">
                    <div className="profile">
                      <img
                        className="profile__img"
                        src={feedsInfo.profileImg_url}
                        alt="feeds__profile__img"
                      />
                      <div className="id">{feedsInfo.feedId}</div>
                    </div>
                    <div className="more">
                      <i className="more__icon fas fa-ellipsis-h" />
                    </div>
                  </div>
                  <img
                    className="feeds__img"
                    src={feedsInfo.feedImg_url}
                    alt="feeds__img"
                  />
                  <div className="contents">
                    <div className="icons">
                      <div className="left">
                        <i className="heart far fa-heart" />
                        <i className="comment fa-regular fa-comment" />
                        <i className="plane fa-regular fa-paper-plane" />
                      </div>
                      <div className="right">
                        <i className="bookmark fa-regular fa-bookmark" />
                      </div>
                    </div>
                    <div className="likes">
                      <div className="image">
                        <img
                          className="likes__img"
                          src={feedsInfo.likeImg_url}
                          alt="feeds__likes__img"
                        />
                      </div>
                      <div className="text">
                        <span className="id">{feedsInfo.likeId}</span>님{' '}
                        <span className="people">외 {feedsInfo.likeNums}</span>
                        이 좋아합니다
                      </div>
                    </div>
                    <div className="texts">
                      <div className="content">
                        <div className="id">{feedsInfo.feedId}</div>
                        <div className="text" />
                        {feedsInfo.feedContent}
                      </div>
                      <div className="more__gray">더보기</div>
                    </div>
                    <div className="newReply">
                      <div className="texts__reply">
                        <div className="texts__reply__left">
                          <div className="id">{feedsInfo.replyId}</div>
                          <div className="text">{feedsInfo.replyContent}</div>
                        </div>
                        <div className="texts__reply__right">
                          <i className="texts__heart fa-regular fa-heart" />
                          <i className="texts__remove fa-regular fa-trash-can" />
                        </div>
                      </div>
                      {replyArray.map((value, index) => {
                        return <ReplyLists key={index} content={value} />;
                      })}
                    </div>
                    <div className="time">
                      <span className="more__gray time__before">
                        {feedsInfo.timeBefore}
                      </span>
                    </div>
                  </div>
                  <form onSubmit={replyRegist} className="reply">
                    <input
                      value={replyValue}
                      onChange={e => {
                        replyInput(e);
                        replyValidation();
                      }}
                      className="input"
                      type="text"
                      placeholder="댓글 달기...."
                    />
                    <button
                      onClick={replyRegist}
                      disabled={replyDisable}
                      type="button"
                      className={
                        replyActive ? 'textBtnActive' : 'textBtnUnactive'
                      }
                    >
                      게시
                    </button>
                  </form>
                </article>
              );
            })}
          </div>
          <aside className="main-right">
            <div className="main-right__container">
              <div className="profile">
                <div className="image">
                  <img
                    className="right__profile__img"
                    src="/images/jangmoonjung/my__profile.jpg"
                    alt="my__profile__img"
                  />
                </div>
                <div className="id">
                  <div id="userID" className="id" data-id="wecode_bootcamp">
                    wecode_bootcamp
                  </div>
                  <div className="more__gray">WeCode | 위코드</div>
                </div>
              </div>
              <div className="story">
                <div className="title">
                  <div className="more__gray">스토리</div>
                  <div className="right__more">모두 보기</div>
                </div>
                <div className="profile">
                  <div className="image">
                    <img
                      className="right__story__img"
                      src="/images/jangmoonjung/story__profile_01.jpg"
                      alt="right__profile__img"
                    />
                  </div>
                  <div className="story__id">
                    <div className="id">_yum_s</div>
                    <div className="more__gray time__before">16분전</div>
                  </div>
                </div>
                <div className="profile">
                  <div className="image">
                    <img
                      className="right__story__img"
                      src="/images/jangmoonjung/story__profile_02.jpg"
                      alt="right__profile__img"
                    />
                  </div>
                  <div className="story__id">
                    <div className="id">drink_eat_drink</div>
                    <div className="more__gray time__before">3시간 전</div>
                  </div>
                </div>
                <div className="profile">
                  <div className="image">
                    <img
                      className="right__story__img"
                      src="/images/jangmoonjung/story__profile_03.jpg"
                      alt="right__profile__img"
                    />
                  </div>
                  <div className="story__id">
                    <div className="id">hyukyc</div>
                    <div className="more__gray time__before">20시간 전</div>
                  </div>
                </div>
                <div className="profile">
                  <div className="image">
                    <img
                      className="right__story__img"
                      src="/images/jangmoonjung/story__profile_04.jpg"
                      alt="right__profile__img"
                    />
                  </div>
                  <div className="story__id">
                    <div className="id">jminkeek</div>
                    <div className="more__gray time__before">26시간전</div>
                  </div>
                </div>
              </div>
              <div className="recommendation">
                <div className="title">
                  <div className="more__gray">회원님을 위한 추천</div>
                  <div className="right__more">모두 보기</div>
                </div>
                <div className="profile">
                  <div className="left">
                    <div className="image">
                      <img
                        className="img"
                        src="/images/jangmoonjung/recommendation__profile_01.jpg"
                        alt="right__profile__img"
                      />
                    </div>
                    <div className="right__recommendation__id">
                      <div className="id">joaaaaaaahye</div>
                      <div className="more__gray">_legend_a님 외 2명이...</div>
                    </div>
                  </div>
                  <div className="right__follow">팔로우</div>
                </div>
                <div className="profile">
                  <div className="left">
                    <div className="image">
                      <img
                        className="img"
                        src="/images/jangmoonjung/recommendation__profile_02.jpg"
                        alt="right__profile__img"
                      />
                    </div>
                    <div className="right__recommendation__id">
                      <div className="id">rampart81</div>
                      <div className="more__gray">
                        ringo,in,seoul님 외 12명...
                      </div>
                    </div>
                  </div>
                  <div className="right__follow">팔로우</div>
                </div>
                <div className="profile">
                  <div className="left">
                    <div className="image">
                      <img
                        className="img"
                        src="/images/jangmoonjung/recommendation__profile_03.jpg"
                        alt="right__profile__img"
                      />
                    </div>
                    <div className="right__recommendation__id">
                      <div className="id">shawnjjoo</div>
                      <div className="more__gray">jimmylee1220님 외 1...</div>
                    </div>
                  </div>
                  <div className="right__follow">팔로우</div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="menu">
                {FOOTER_LIST.map(footerList => {
                  return <span key={footerList.id}>{footerList.text}</span>;
                })}
              </div>
              <div className="copyright">© 2022 INSTAGRAM FROM META</div>
            </footer>
          </aside>
        </div>
      </main>
    </>
  );
}

export default MainJang;
