import React from 'react';

import { useSelector } from 'react-redux';

import { Teaser } from './Teaser';

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
        <Teaser
          key={item.id}
          data={item}
        />
      ))}
    </>
  );
};
