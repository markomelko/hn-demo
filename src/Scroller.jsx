import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PointRightIcon } from './UI/Icons';
import { PointLeftIcon } from './UI/Icons';

/**
 * Should be used with Story view.
 *
 * Features:
 * - Next story button
 * - Prev story button
 *
 * Additionals
 * - Story index, 4/500
 * - There are new stories, load them?
 *
 * @returns {React.ReactElement}
 */
export const Scroller = ({ id }) => {
  const navigate = useNavigate();

  const { storyIds } = useSelector((state) => state);
  const currentIndex = storyIds.findIndex((s) => s === id);

  const [currIndex, setCurrIndex] = useState(currentIndex);

  const totalCount = storyIds.length;

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newId = storyIds[currentIndex - 1];
      setCurrIndex(currentIndex - 1);

      navigate({
        pathname: '/story',
        search: `?id=${newId}`,
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < totalCount) {
      const newId = storyIds[currentIndex + 1];

      setCurrIndex(currentIndex + 1);
      navigate({
        pathname: '/story',
        search: `?id=${newId}`,
      });
    }
  };

  const showIndex = currIndex + 1;

  return (
    <div className='hn-scroller-container'>
      <div onClick={handlePrev}>
        <PointLeftIcon />
      </div>
      <div className='hn-default-text'>{showIndex + '/' + totalCount}</div>
      <div onClick={handleNext}>
        <PointRightIcon />
      </div>
    </div>
  );
};
