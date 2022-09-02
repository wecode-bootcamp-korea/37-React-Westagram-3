import React, { useState } from 'react';
import Comments from './components/Comments';

function Feeds(props) {
  const [commentsValue, setCommentsValue] = useState('');
  const [commentsArr, setCommentsArr] = useState([]);

  const saveComments = event => {
    setCommentsValue(event.target.value);
  };

  const commentsValid = commentsValue.trim().length > 0;

  const makeCommentsArr = event => {
    event.preventDefault();
    return commentsValid
      ? (setCommentsArr([...commentsArr, commentsValue]), setCommentsValue(''))
      : setCommentsArr(commentsArr);
  };

  return (
    <div className="feeds">
      <article className="feeds-box">
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
        <div className="feeds-img" />
        <div className="feeds-icons">
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
        <ul id="feedsList" className="feeds-list">
          {commentsArr.map((value, index) => (
            <Comments item={value} key={index} />
          ))}
        </ul>
        <form onSubmit={makeCommentsArr} id="feedsForm" className="feeds-input">
          <input
            onChange={saveComments}
            id="feedsInput"
            type="text"
            placeholder="댓글 달기.."
            value={commentsValue}
          />
          <button id="feedsBtn">게시</button>
        </form>
      </article>
    </div>
  );
}

export default Feeds;
