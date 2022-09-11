import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import FeedLists from './FeedLists';
import StoryProfile from './StoryProfile';
import RecommendationProfile from './RecommendationProfile';
import { FOOTER_LIST } from './FooterList';
import './Main.scss';

function MainJang() {
  const [feedsInfoList, setFeedsInfoList] = useState([]);
  const [storyProfileList, setStoryProfileList] = useState([]);
  const [recommendationProfileList, setRecommendationProfileList] = useState(
    []
  );

  useEffect(() => {
    fetch('/data/feedListInfo.json')
      .then(response => {
        return response.json();
      })
      .then(result => setFeedsInfoList(result));
  }, []);

  useEffect(() => {
    fetch('/data/storyProfileInfo.json')
      .then(response => {
        return response.json();
      })
      .then(result => setStoryProfileList(result));
  }, []);

  useEffect(() => {
    fetch('/data/recommendationProfileInfo.json')
      .then(response => {
        return response.json();
      })
      .then(result => setRecommendationProfileList(result));
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
                {storyProfileList.map(storyProfile => {
                  return (
                    <StoryProfile
                      key={storyProfile.id}
                      storyProfile={storyProfile}
                    />
                  );
                })}
              </div>
              <div className="recommendation">
                <div className="title">
                  <div className="more__gray">회원님을 위한 추천</div>
                  <div className="right__more">모두 보기</div>
                </div>
                {recommendationProfileList.map(recommendationProfile => {
                  return (
                    <RecommendationProfile
                      key={recommendationProfile.id}
                      recommendationProfile={recommendationProfile}
                    />
                  );
                })}
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
