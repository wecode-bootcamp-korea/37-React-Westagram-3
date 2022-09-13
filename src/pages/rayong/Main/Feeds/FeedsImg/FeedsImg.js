import React from 'react';

function FeedsImg({ feedImg }) {
  // console.log(feedImg);
  return (
    <div
      className="feedsImg"
      style={{
        // background: feedImg,
        background: `url(${feedImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}

export default FeedsImg;
