import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from './components/Feeds/Feeds';
import MainRight from './components/MainRight/MainRight';
import '../Main/Main.scss';

function MainRa() {
  const [userFeedInfo, setUserFeedInfo] = useState([]);

  useEffect(() => {
    fetch('/data/userFeedInfo.json')
      .then(response => response.json())
      .then(data => setUserFeedInfo(data));
  }, []);

  return (
    <div className="main">
      <Nav />
      <main className="contents">
        <div className="wrapper">
          <div className="contents-box">
            <div className="feeds-wrapper">
              {userFeedInfo.map(feedInfo => {
                return <Feeds key={feedInfo.userId} feedInfo={feedInfo} />;
              })}
            </div>
            <MainRight userFeedInfo={userFeedInfo} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainRa;
