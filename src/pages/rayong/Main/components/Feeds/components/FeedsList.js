import React from 'react';

function FeedsList({ commentsArr, toggleLikeIcon, deleteCommentsIcon }) {
  return (
    <ul id="feedsList" className="feeds-list">
      {commentsArr.map((value, index) => (
        <li key={value.code}>
          <span>
            <strong>wecode</strong>
            {value}
          </span>
          <div>
            <i onClick={toggleLikeIcon} className="fa-solid fa-heart" />
            <i
              onClick={deleteCommentsIcon}
              className="fa-regular fa-circle-xmark"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FeedsList;
