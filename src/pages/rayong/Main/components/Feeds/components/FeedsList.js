import React from 'react';

function FeedsList({
  commentsArr,
  toggleLikeIcon,
  isClicked,
  deleteCommentsIcon,
}) {
  return (
    <ul id="feedsList" className="feeds-list">
      {commentsArr.map((value, index) => (
        <li key={index}>
          <span>
            <strong>wecode</strong>
            {value}
          </span>
          <div>
            <i
              onClick={toggleLikeIcon}
              className="fa-solid fa-heart"
              style={{ color: isClicked ? 'red' : 'black' }}
            />
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
