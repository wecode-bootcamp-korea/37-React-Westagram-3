import React, { useState } from 'react';
import SearchBox from './SearchBox/SearchBox';
import './../Nav/Nav.scss';

function Nav({ userFeedInfo }) {
  // console.log(userFeedInfo);
  // const [userName, setUserName] = useState('');
  const [userInput, setUserInput] = useState('');

  const sortedUserName = userFeedInfo.filter(userInfo => {
    return userInfo.userName.includes(userInput);
  });

  // console.log(sortedUserName);

  const handleInput = e => {
    document.querySelector('#inputBoxIcon').className = 'display-none';
    setUserInput(e.target.value);
  };
  return (
    <nav className="nav">
      <div className="wrapper">
        <div className="navBox">
          <div className="logoBox">
            <img
              className="icon"
              src="/images/rayong/logo.png"
              alt="westagram-logo"
            />
            <p>Westagram</p>
          </div>
          <div className="inputBox">
            <input
              id="searchInputbox"
              type="text"
              placeholder="검색"
              onChange={handleInput}
            />
            <i id="inputBoxIcon" className="fa-solid fa-magnifying-glass" />
            {sortedUserName.length === 1 ? (
              <SearchBox sortedUserName={sortedUserName} />
            ) : null}
          </div>
          <div className="iconBox">
            <i className="fa-regular fa-compass fa-xl" />
            <i className="fa-regular fa-heart fa-xl" />
            <i className="fa-regular fa-user fa-xl" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
