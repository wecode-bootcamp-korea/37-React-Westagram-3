import React from 'react';

function FeedsForm({ makeCommentsArr, saveComments, commentsValue }) {
  return (
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
  );
}

export default FeedsForm;
