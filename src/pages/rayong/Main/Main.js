import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from './components/Feeds/Feeds';
import MainRight from './components/MainRight/MainRight';
import '../Main/Main.scss';

function MainRa() {
  return (
    <div className="main">
      <Nav />
      <main className="contents">
        <div className="wrapper">
          <div className="contents-box">
            <Feeds />
            <MainRight />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainRa;
