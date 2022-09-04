import React, { useState } from 'react';
import FeedsProfile from './components/FeedsProfile';
import FeedsImg from './components/FeedsImg';
import FeedsIcon from './components/FeedsIcon';
import FeedsLikes from './components/FeedsLikes';
import FeedsForm from './components/FeedsForm';
import FeedsList from './components/FeedsList';

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

  const [isClicked, setIsClicked] = useState(false);

  const toggleLikeIcon = event => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="feeds">
      <article className="feeds-box">
        <FeedsProfile />
        <FeedsImg />
        <FeedsIcon />
        <FeedsLikes />
        <FeedsList
          commentsArr={commentsArr}
          toggleLikeIcon={toggleLikeIcon}
          isClicked={isClicked}
        />
        <FeedsForm
          makeCommentsArr={makeCommentsArr}
          saveComments={saveComments}
          commentsValue={commentsValue}
        />
      </article>
    </div>
  );
}

export default Feeds;
