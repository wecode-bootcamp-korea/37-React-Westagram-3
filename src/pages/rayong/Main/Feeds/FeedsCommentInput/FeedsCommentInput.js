import React from 'react';

function FeedsCommentInput({ makeCommentsArr, saveComments, commentsValue }) {
  return (
    <form onSubmit={makeCommentsArr} id="feedsForm" className="feedsInput">
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

export default FeedsCommentInput;
