import { Routes, Route } from 'react-router-dom';

import { LandingView } from './UI/LandingView';
import { GetStory } from './GetStoryContent';

/**
 * App routes.
 *
 * @returns {React.ReactElement}
 */
export const AppRoutes = () => (
  <Routes>
    <Route
      path='/'
      element={<LandingView />}
    />
    <Route
      path='/story'
      element={<GetStory />}
    />
  </Routes>
);
