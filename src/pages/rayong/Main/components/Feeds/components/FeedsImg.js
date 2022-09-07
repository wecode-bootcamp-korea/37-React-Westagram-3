import React from 'react';

function FeedsImg({ feedImg }) {
  return (
    <div
      className="feeds-img"
      style={{
        background: feedImg,
      }}
    />
  );
}

export default FeedsImg;
