import React from 'react';
import './SearchBox.scss';

function SearchBox({ sortedUserName }) {
  return (
    <div className="SearchBox">
      <ul className="boxWrap">
        {sortedUserName.map(user => {
          return (
            <li key={user.userId} className="searchList">
              {user.userName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchBox;
