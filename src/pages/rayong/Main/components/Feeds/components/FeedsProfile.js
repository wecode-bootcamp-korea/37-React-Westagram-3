import React from 'react';

function FeedsProfile(props) {
  return (
    <div className="feeds-profile">
      <div className="box">
        <div className="user">
          <img
            src="https://velog.velcdn.com/images/rayong/profile/df592861-ea43-432c-aea2-a1f79730300b/image.png"
            alt="프로필이미지"
          />
          <p>wecode_dd</p>
        </div>
        <i className="fa-regular fa-compass fa-xl" />
      </div>
    </div>
  );
}

export default FeedsProfile;
