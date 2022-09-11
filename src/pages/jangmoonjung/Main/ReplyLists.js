import React from 'react';

function ReplyLists({ content }) {
  return (
    <div className="texts__reply">
      <div className="texts__reply__left">
        <div className="id">wecode_bootcamp</div>
        <div className="text">{content}</div>
      </div>
      <div className="texts__reply__right">
        <i className="texts__heart fa-regular fa-heart" />
        <i className="texts__remove fa-regular fa-trash-can" />
      </div>
    </div>
  );
}

export default ReplyLists;
