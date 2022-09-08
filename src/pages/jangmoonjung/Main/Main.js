import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import FeedLists from './FeedLists';
import { FOOTER_LIST } from './FooterList';
import './Main.scss';

function MainJang() {
  const [feedsInfoList, setFeedsInfoList] = useState([]);

  useEffect(() => {
    fetch('/data/feedListInfo.json')
      .then(response => {
        return response.json();
      })
      .then(result => setFeedsInfoList(result));
  }, []);

  return (
    <>
      <Nav />
      <main className="main">
        <div className="container">
          <div className="feeds">
            {feedsInfoList.map(feedsInfo => {
              return <FeedLists key={feedsInfo.id} feedsInfo={feedsInfo} />;
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
