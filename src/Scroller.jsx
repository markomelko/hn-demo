import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PointRightIcon } from './UI/Icons';
import { PointLeftIcon } from './UI/Icons';

/**
 * Prev or Next story button pressed.
 *
 * @param {function} navigateHandler
 * @param {string} storyId
 */
const navigateTo = (navigateHandler, storyId) => {
  navigateHandler({
    pathname: '/story',
    search: `?id=${storyId}`,
  });
};

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

  useEffect(() => {
    // lets re-check current index, e.g, if user press back-button
    setCurrIndex(storyIds.findIndex((s) => s === id));
  }, [id]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      const storyId = storyIds[currentIndex - 1];
      setCurrIndex(currentIndex - 1);
      navigateTo(navigate, storyId);
    }
  };

  const handleNext = () => {
    // NOTE: Array starts from 0
    let realTotal = totalCount - 1;

    if (currentIndex < realTotal) {
      const storyId = storyIds[currentIndex + 1];
      setCurrIndex(currentIndex + 1);
      navigateTo(navigate, storyId);
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
