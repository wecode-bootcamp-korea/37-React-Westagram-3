import React from 'react';

function FeedsLikes(props) {
  return (
    <div className="feeds-likes">
      <div className="box">
        <img
          src="https://velog.velcdn.com/images/rayong/profile/df592861-ea43-432c-aea2-a1f79730300b/image.png"
          alt=""
        />
        <p>
          <strong>wecod</strong>님 외 <strong>10명</strong>이 좋아합니다.
        </p>
      </div>
    </div>
  );
}

export default FeedsLikes;
