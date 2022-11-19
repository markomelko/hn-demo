import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ActionGetTopStoryIds } from './store/appActions';

import { AppRoutes } from './AppRoutes';

import { NavBar } from './UI/NavBar';

/**
 * ROOT component for data initialization.
 * Required: {@link ActionGetTopStoryIds}
 *
 * @returns {React.ReactElement}
 */
export const App = () => {
  const { storyIds, initializationFailed } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionGetTopStoryIds());
  }, []);

  let readyToRender = false;

  if (storyIds.length > 0 && !initializationFailed) {
    readyToRender = true;
  }

  return (
    <div className='hn-app-container'>
      <NavBar />
      <div className='hn-content-container'>
        {readyToRender ? <AppRoutes /> : <div>Loading stories...</div>}
        {initializationFailed ? <p>App initialization error.</p> : ''}
      </div>
    </div>
  );
};
