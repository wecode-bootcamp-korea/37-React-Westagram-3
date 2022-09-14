import React from 'react';
import { INFO_LIST } from './INFO_LIST';

function RightFooter() {
  return (
    <p className="rightFooter">
      westagram&nbsp;
      {INFO_LIST.map(info => {
        return <span key={info.id}>{info.content}</span>;
      })}
    </p>
  );
}

export default RightFooter;
