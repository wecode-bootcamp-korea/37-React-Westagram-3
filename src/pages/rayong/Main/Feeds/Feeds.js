import React, { useState } from 'react';
import FeedsProfile from './FeedsProfile/FeedsProfile';
import FeedsImg from './FeedsImg/FeedsImg';
import FeedsCommentList from './FeedsCommentList/FeedsCommentList';
import FeedsCommentInput from './FeedsCommentInput/FeedsCommentInput';

function Feeds({ feedInfo }) {
  const [commentsValue, setCommentsValue] = useState('');
  const [commentsArr, setCommentsArr] = useState([]);

  const saveComments = event => {
    setCommentsValue(event.target.value);
  };

  const makeCommentsArr = event => {
    event.preventDefault();
    if (commentsValue.trim().length > 0) {
      setCommentsArr([...commentsArr, commentsValue]);
      setCommentsValue('');
    }
  };

  const toggleLikeIcon = e => {
    e.target.classList.toggle('icon-red');
  };

  const deleteCommentsIcon = event => {
    event.target.parentElement.parentElement.remove();
  };

  return (
    <div className="feeds">
      <article className="feedsBox">
        <FeedsProfile profileName={feedInfo.userName} />
        <FeedsImg feedImg={feedInfo.userImg} />
        <div className="feedsIcons">
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
        <div className="feedsLikes">
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
        <FeedsCommentList
          commentsArr={commentsArr}
          toggleLikeIcon={toggleLikeIcon}
          deleteCommentsIcon={deleteCommentsIcon}
        />
        <FeedsCommentInput
          makeCommentsArr={makeCommentsArr}
          saveComments={saveComments}
          commentsValue={commentsValue}
        />
      </article>
    </div>
  );
}

export default Feeds;
