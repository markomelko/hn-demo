import { Routes, Route } from 'react-router-dom';

import { Story } from './Story';

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
      element={<Story />}
    />
    <Route
      path='*'
      element={<NotFound />}
    />
  </Routes>
);
