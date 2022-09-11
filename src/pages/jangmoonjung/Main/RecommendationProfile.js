import React from 'react';

function RecommendationProfile({ recommendationProfile }) {
  return (
    <div className="profile">
      <div className="left">
        <div className="image">
          <img
            className="img"
            src={recommendationProfile.recommendationImg}
            alt="right__profile__img"
          />
        </div>
        <div className="right__recommendation__id">
          <div className="id">{recommendationProfile.recommendationId}</div>
          <div className="more__gray">
            {recommendationProfile.recommendationContent}
          </div>
        </div>
      </div>
      <div className="right__follow">팔로우</div>
    </div>
  );
}

export default RecommendationProfile;
