import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from './Feeds/Feeds';
import MainRight from './MainRight/MainRight';
import '../Main/Main.scss';

function MainRa() {
  const [userFeedInfo, setUserFeedInfo] = useState([]);

  useEffect(() => {
    fetch('/data/userFeedInfo.json')
      .then(response => response.json())
      .then(data => setUserFeedInfo(data));
  }, []);

  return (
    <main className="main">
      <Nav userFeedInfo={userFeedInfo} />
      <div className="wrapper">
        <div className="contentsBox">
          <div className="feedsWrapper">
            {userFeedInfo.map(feedInfo => {
              return <Feeds key={feedInfo.userId} feedInfo={feedInfo} />;
            })}
          </div>
          <MainRight userFeedInfo={userFeedInfo} />
        </div>
      </div>
    </main>
  );
}

export default MainRa;
