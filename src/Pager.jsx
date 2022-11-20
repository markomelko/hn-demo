import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ActionGetAndSetStoriesData } from './store/appActions';

import { getItemsFromArray } from './utils/dataHandlers';

import { APP_DEFAULTS } from './config/defaults';

/**
 * Pager component.
 *
 * Show more button press: get additional stories
 *
 * Required: {@link ActionGetAndSetStoriesData}
 *
 * @returns {React.ReactElement}
 */
export const Pager = () => {
  const { PAGINATION } = APP_DEFAULTS;

  const [currCount, setStoryCount] = useState(PAGINATION);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const { storyIds, loaderActive } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleShowMoreTeasers = () => {
    const newShowStoriesCount = currCount + PAGINATION;
    const countOfStories = storyIds.length;

    if (currCount < countOfStories && newShowStoriesCount < countOfStories) {
      const storyIdsArr = getItemsFromArray(
        storyIds,
        currCount,
        newShowStoriesCount
      );

      dispatch(ActionGetAndSetStoriesData(storyIdsArr, false));

      setStoryCount(newShowStoriesCount);

      setShowMoreButton(true);
    } else if (
      currCount < countOfStories &&
      newShowStoriesCount >= countOfStories
    ) {
      const storyIdsArr = getItemsFromArray(
        storyIds,
        currCount,
        countOfStories
      );

      dispatch(ActionGetAndSetStoriesData(storyIdsArr, false));

      setStoryCount(countOfStories);

      setShowMoreButton(false);
    } else {
      setShowMoreButton(false);
    }
  };

  return (
    <>
      {loaderActive ? (
        <p>Loading teasers...</p>
      ) : (
        <>
          {showMoreButton ? (
            <button
              className='hn-default-btn'
              onClick={handleShowMoreTeasers}
            >
              show more
            </button>
          ) : (
            ''
          )}
        </>
      )}
    </>
  );
};
