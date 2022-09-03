import React from 'react';

function Comments({ value, key }) {
  return (
    <li key={key}>
      <span>
        <strong>wecode</strong>
        {value}
      </span>
      <div>
        <i className="fa-solid fa-heart" />
        <i className="fa-regular fa-circle-xmark" />
      </div>
    </li>
  );
}

export default Comments;
