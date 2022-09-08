import React, { useState } from 'react';
import ReplyLists from './ReplyLists';

function FeedLists({ feedsInfo }) {
  const [replyValue, setReplyValue] = useState('');
  const [replyArray, setReplyArray] = useState([]);

  const replyInput = event => {
    setReplyValue(event.target.value);
  };

  const replyValidation = replyValue.trim().length > 0;

  const replyRegist = event => {
    event.preventDefault();
    if (replyValue.trim().length === 0) {
      return;
    } else {
      setReplyArray([...replyArray, replyValue]);
      setReplyValue('');
    }
  };

  return (
    <article className="container">
      <div className="header">
        <div className="profile">
          <img
            className="profile__img"
            src={feedsInfo.profileImg_url}
            alt="feeds__profile__img"
          />
          <div className="id">{feedsInfo.feedId}</div>
        </div>
        <div className="more">
          <i className="more__icon fas fa-ellipsis-h" />
        </div>
      </div>
      <img
        className="feeds__img"
        src={feedsInfo.feedImg_url}
        alt="feeds__img"
      />
      <div className="contents">
        <div className="icons">
          <div className="left">
            <i className="heart far fa-heart" />
            <i className="comment fa-regular fa-comment" />
            <i className="plane fa-regular fa-paper-plane" />
          </div>
          <div className="right">
            <i className="bookmark fa-regular fa-bookmark" />
          </div>
        </div>
        <div className="likes">
          <div className="image">
            <img
              className="likes__img"
              src={feedsInfo.likeImg_url}
              alt="feeds__likes__img"
            />
          </div>
          <div className="text">
            <span className="id">{feedsInfo.likeId}</span>님{' '}
            <span className="people">외 {feedsInfo.likeNums}</span>이 좋아합니다
          </div>
        </div>
        <div className="texts">
          <div className="content">
            <div className="id">{feedsInfo.feedId}</div>
            <div className="text" />
            {feedsInfo.feedContent}
          </div>
          <div className="more__gray">더보기</div>
        </div>
        <div className="newReply">
          <div className="texts__reply">
            <div className="texts__reply__left">
              <div className="id">{feedsInfo.replyId}</div>
              <div className="text">{feedsInfo.replyContent}</div>
            </div>
            <div className="texts__reply__right">
              <i className="texts__heart fa-regular fa-heart" />
              <i className="texts__remove fa-regular fa-trash-can" />
            </div>
          </div>
          {replyArray.map((value, index) => {
            return <ReplyLists key={index} content={value} />;
          })}
        </div>
        <div className="time">
          <span className="more__gray time__before">
            {feedsInfo.timeBefore}
          </span>
        </div>
      </div>
      <form onSubmit={replyRegist} className="reply">
        <input
          value={replyValue}
          onChange={replyInput}
          className="input"
          type="text"
          placeholder="댓글 달기...."
        />
        <button
          onClick={replyRegist}
          disabled={!replyValidation}
          type="button"
          className={replyValidation ? 'textBtnActive' : 'textBtnUnactive'}
        >
          게시
        </button>
      </form>
    </article>
  );
}
export default FeedLists;
