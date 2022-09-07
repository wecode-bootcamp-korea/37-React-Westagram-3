import React, { useState } from 'react';
import FeedsProfile from './components/FeedsProfile';
import FeedsImg from './components/FeedsImg';
import FeedsIcon from './components/FeedsIcon';
import FeedsLikes from './components/FeedsLikes';
import FeedsList from './components/FeedsList';
import FeedsForm from './components/FeedsForm';

function Feeds({ userFeedData }) {
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
      {userFeedData.map((feedData, index) => {
        return (
          <article className="feeds-box" key={feedData.userId}>
            <FeedsProfile profileName={feedData.userName} />
            <FeedsImg feedImg={feedData.userImg} />
            <FeedsIcon />
            <FeedsLikes />
            <FeedsList
              commentsArr={commentsArr}
              toggleLikeIcon={toggleLikeIcon}
              deleteCommentsIcon={deleteCommentsIcon}
            />
            <FeedsForm
              makeCommentsArr={makeCommentsArr}
              saveComments={saveComments}
              commentsValue={commentsValue}
            />
          </article>
        );
      })}
    </div>
  );
}

export default Feeds;
