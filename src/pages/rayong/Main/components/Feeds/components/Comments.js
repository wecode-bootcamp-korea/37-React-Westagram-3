import React from 'react';

function Comments({ item }) {
  return (
    <li>
      <span>
        <strong>wecode</strong>
        {item}
      </span>
      <div>
        <i className="fa-solid fa-heart" />
        <i className="fa-regular fa-circle-xmark" />
      </div>
    </li>
  );
}

export default Comments;
