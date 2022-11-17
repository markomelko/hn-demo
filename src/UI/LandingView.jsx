import React from 'react';

import { TeasersList } from '../TeasersList';
import { Pager } from '../Pager';

/**
 * Works as a home page for App.
 *
 * @returns {React.ReactElement}
 */
export const LandingView = () => {
  return (
    <>
      <TeasersList />
      <Pager />
    </>
  );
};
