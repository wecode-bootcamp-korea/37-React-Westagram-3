import React from 'react';

function FeedsProfile({ profileName }) {
  return (
    <div className="feedsProfile">
      <div className="box">
        <div className="user">
          <img
            src="https://velog.velcdn.com/images/rayong/profile/df592861-ea43-432c-aea2-a1f79730300b/image.png"
            alt="프로필이미지"
          />
          <p>{profileName}</p>
        </div>
        <i className="fa-regular fa-compass fa-xl" />
      </div>
    </div>
  );
}

export default FeedsProfile;
