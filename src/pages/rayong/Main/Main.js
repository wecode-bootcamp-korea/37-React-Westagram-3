import React from 'react';
import { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from './components/Feeds/Feeds';
import MainRight from './components/MainRight/MainRight';
import '../Main/Main.scss';

function MainRa() {
  const [userFeedData, setUserFeedData] = useState([]);

  useEffect(() => {
    fetch('/data/userFeedData.json')
      .then(response => response.json())
      .then(data => setUserFeedData(data));
  }, []);

  return (
    <div className="main">
      <Nav />
      <main className="contents">
        <div className="wrapper">
          <div className="contents-box">
            <Feeds userFeedData={userFeedData} />
            <MainRight />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainRa;
