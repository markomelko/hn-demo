import React from 'react';

import { useNavigate } from 'react-router-dom';

/**
 * UI Component for a single TeaserItem.
 *
 * @returns {React.ReactElement}
 */
export const Teaser = ({ data }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate({
      pathname: '/story',
      search: `?id=${data.id}`,
    });
  };

  return (
    <div className='hn-teaser-card hn-content-mb hn-default-padding'>
      <div>
        <div
          className='hn-large-text hn-act-as-link'
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
        <div className='hn-default-text'>Score: {data?.score}</div>
        <div className='hn-default-text'>Comments: {data?.descendants}</div>
      </div>
    </div>
  );
};
