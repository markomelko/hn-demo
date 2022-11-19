import React, { useEffect } from 'react';

import { Scroller } from '../Scroller';

/**
 * UI Component as StoryItem.
 *
 * @returns {React.ReactElement}
 */
export const Story = ({ data }) => {
  useEffect(() => {
    const element = document.getElementById('hn-story-card-top');
    element.scrollIntoView();
  }, []);

  return (
    <>
      <Scroller id={data.id} />
      <div
        id='hn-story-card-top'
        className='hn-teaser-card hn-content-mb hn-default-padding'
      >
        <div>
          <div className='hn-large-text'>{data?.title}</div>
          <div className='hn-default-padding hn-light-text'>
            <a
              href={data?.url}
              target='_blank'
            >
              {data?.url}
            </a>
          </div>
        </div>
        <div>
          <div className='hn-default-text'>
            Story by: <span className='hn-special-text'>{data?.by}</span>
          </div>
          <div className='hn-default-text'>Score: {data?.score}</div>
          <div className='hn-default-text'>Comments: {data?.descendants}</div>
        </div>
      </div>
    </>
  );
};
