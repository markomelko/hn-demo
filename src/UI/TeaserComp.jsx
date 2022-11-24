import React from 'react';

import { useNavigate } from 'react-router-dom';

import { parseTimeStamp } from '../utils/dataHandlers';

/**
 * UI Component for a single TeaserItem.
 *
 * Required: {@link parseTimeStamp}
 *
 * @returns {React.ReactElement}
 */
export const TeaserComp = ({ data }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate({
      pathname: '/story',
      search: `?id=${data.id}`,
    });
  };

  const ddMmYyyy = parseTimeStamp(data?.time);

  return (
    <div className='hn-teaser-card hn-content-mb hn-default-padding'>
      <div>
        <div
          className='hn-large-text hn-act-as-link hn-text-underline'
          onClick={handleItemClick}
        >
          {data?.title}
        </div>
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
          By: <span className='hn-special-text'>{data?.by}</span>
        </div>
        <div className='hn-default-text hn-content-mt'>
          Published: {ddMmYyyy}
        </div>
        <div className='hn-default-text'>Score: {data?.score}</div>
        <div className='hn-default-text'>Comments: {data?.descendants}</div>
      </div>
    </div>
  );
};
