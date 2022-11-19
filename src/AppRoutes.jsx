import { Routes, Route } from 'react-router-dom';

import { GetStory } from './GetStory';

import { Landing } from './UI/Landing';
import { NotFound } from './UI/NotFound';

/**
 * App route paths.
 *
 * @returns {React.ReactElement}
 */
export const AppRoutes = () => (
  <Routes>
    <Route
      path='/'
      element={<Landing />}
    />
    <Route
      path='/story'
      element={<GetStory />}
    />
    <Route
      path='*'
      element={<NotFound />}
    />
  </Routes>
);
