import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ActionGetStoryItems } from './store/appActions';

import { APP_DEFAULTS } from './config/defaults';

/**
 * Return wanted items from all stories array,
 * get from right start and end index posiotion.
 *
 * @property {Array} dataArr
 * @property {number} startIndex
 * @property {number} endIndex
 *
 * @returns {Array}
 */
const getStoryIds = (dataArr, startIndex, endIndex) => {
  let retArr = [];
  for (let i = startIndex; i < endIndex; i++) {
    retArr.push(dataArr[i]);
  }
  return retArr;
};

/**
 * Pager component.
 *
 *  First render:
 *  - request default stories
 *
 *  Show more button press:
 *  - get additional stories
 *
 * Required: {@link ActionGetStoryItems}
 *
 * @returns {React.ReactElement}
 */
export const Pager = () => {
  const { PAGINATION } = APP_DEFAULTS;

  const dispatch = useDispatch();

  const [currCount, setStoryCount] = useState(PAGINATION);
  const { topStories, teasersCount } = useSelector((state) => state);

  useEffect(() => {
    if (teasersCount < currCount) {
      const initialStories = getStoryIds(topStories, 0, PAGINATION);
      dispatch(ActionGetStoryItems(true, PAGINATION, initialStories));
    }
  }, []);

  const showMoreBtnPrs = () => {
    const newTotalCount = currCount + PAGINATION;
    const storiesToAdd = getStoryIds(topStories, currCount, newTotalCount);

    setStoryCount(newTotalCount);

    dispatch(ActionGetStoryItems(false, newTotalCount, storiesToAdd));
  };

  return (
    <button
      className='hn-default-btn'
      onClick={showMoreBtnPrs}
    >
      show more
    </button>
  );
};
