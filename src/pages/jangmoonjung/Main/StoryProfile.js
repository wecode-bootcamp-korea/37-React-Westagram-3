import React from 'react';

function StoryProfile({ storyProfile }) {
  return (
    <div className="profile">
      <div className="image">
        <img
          className="right__story__img"
          src={storyProfile.storyImg}
          alt="right__profile__img"
        />
      </div>
      <div className="story__id">
        <div className="id">{storyProfile.storyId}</div>
        <div className="more__gray time__before">{storyProfile.storyTime}</div>
      </div>
    </div>
  );
}

export default StoryProfile;
