import React from 'react';

function FeedsIcon(props) {
  return (
    <div className="feeds-icons">
      <div className="box">
        <div className="left">
          <i className="fa-regular fa-heart fa-xl" />
          <i className="fa-regular fa-comment fa-xl" />
          <i className="fa-regular fa-envelope fa-xl" />
        </div>
        <div className="right">
          <i className="fa-regular fa-bookmark fa-xl" />
        </div>
      </div>
    </div>
  );
}

export default FeedsIcon;
