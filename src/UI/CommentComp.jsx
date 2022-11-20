import React from 'react';

import parse from 'html-react-parser';

/**
 * Comment UI component.
 *
 * @param {object} commentData
 * @param {bool} child
 *
 * @returns {React.ReactElement}
 */
export const CommentComp = ({ commentData, child }) => {
  let styles = 'hn-comment-card hn-content-mb hn-default-padding';
  let byStyles = 'hn-special-text';
  let byText = 'Comment by';

  if (child === 'child') {
    styles = 'hn-child-comment hn-content-mb hn-default-padding';
    byStyles = 'hn-text-black';
    byText = 'Replied by';
  }

  if (commentData.deleted || commentData.dead) {
    return null;
  }

  return (
    <div className={styles}>
      <div>
        <div className='hn-light-text hn-content-mb'>
          {parse(commentData?.text)}
        </div>
      </div>
      <div className='hn-default-text'>
        {byText} {''}
        <span className={byStyles}>{commentData?.by}</span>
      </div>
    </div>
  );
};
