import React from 'react';

import { useSelector } from 'react-redux';

import { TeaserComp } from './TeaserComp';

/**
 * Get current teasers list from app state
 * and renders Teaser items.
 *
 * @returns {React.ReactElement}
 */
export const TeasersList = () => {
  const { curTeasers } = useSelector((state) => state);

  return (
    <>
      {curTeasers?.map((item) => (
        <TeaserComp
          key={item.id}
          data={item}
        />
      ))}
    </>
  );
};
