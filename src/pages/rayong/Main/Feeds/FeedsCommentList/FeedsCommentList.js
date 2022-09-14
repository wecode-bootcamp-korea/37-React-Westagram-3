import React from 'react';

function FeedsCommentList({ commentsArr, toggleLikeIcon, deleteCommentsIcon }) {
  return (
    <ul id="feedsList" className="feedsList">
      {commentsArr.map((value, index) => (
        <li key={value.id}>
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

export default FeedsCommentList;
