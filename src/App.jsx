import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ActionGetStories } from './store/appActions';

import { AppRoutes } from './AppRoutes';
import { NavBar } from './UI/NavBar';

/**
 * Root component for data initialization.
 * Required: {@link ActionGetStories}
 *
 * @returns {React.ReactElement}
 */
export const App = () => {
  const { topStories, startFail } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionGetStories());
  }, []);

  let appStoriesReady = false;

  if (topStories.length > 0 && !startFail) {
    appStoriesReady = true;
  }

  return (
    <div className='hn-app-container'>
      <NavBar />
      <div className='hn-content-container'>
        {appStoriesReady ? <AppRoutes /> : <div>Loading stories...</div>}
        {startFail ? <p>App start failed, contact to author!</p> : ''}
      </div>
    </div>
  );
};
