import React from 'react';

function FeedsImg({ feedImg }) {
  return (
    <div
      className="feeds-img"
      style={{
        background: feedImg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}

export default FeedsImg;
