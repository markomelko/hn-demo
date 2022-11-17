import React from 'react';

import parse from 'html-react-parser';

/**
 * Single Comment view, just a fast demo.
 *
 * NOTE: Comments requires more work.
 *
 * @returns {React.ReactElement}
 */
export const Comment = ({ commentData }) => {
  if (commentData?.dead || commentData?.deleted) {
    return null;
  }

  let showRepliesCount = false;
  if (commentData.kids?.length > 0) {
    showRepliesCount = true;
  }

  return (
    <div className='hn-comment-card hn-content-mb hn-default-padding'>
      <div>
        <div className='hn-light-text hn-content-mb'>
          {parse(commentData.text)}
        </div>
      </div>
      <div className='hn-default-text '>
        Comment by: {''}
        <span className='hn-special-text'>{commentData?.by}</span>
      </div>
      <div>
        {showRepliesCount ? (
          <div className='hn-default-text hn-content-mt'>
            <span className='hn-small-text'>
              There are {commentData.kids?.length} replies, but they are not
              shown in the demo
            </span>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
