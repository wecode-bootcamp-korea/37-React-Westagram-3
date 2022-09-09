import React from 'react';

function FeedsImg({ feedImg }) {
  return (
    <div
      className="feedsImg"
      style={{
        background: feedImg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}

export default FeedsImg;
