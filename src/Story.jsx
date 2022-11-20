import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ActionSetCurrStoryId } from './store/appActions';

import { Comments } from './Comments';
import { StoryComp } from './UI/StoryComp';

import { fetchJsonByUrl } from './utils/dataHandlers';
const contentUrl = import.meta.env.VITE_CONTENT_ROOT;

/**
 * Get full story content by storyId.
 *
 * Required: {@link ActionSetCurrStoryId}
 * Required: {@link fetchJsonByUrl}
 *
 * @returns {ReactElement}
 */
export const Story = () => {
  const dispatch = useDispatch();

  const { search } = useLocation();

  const id = new URLSearchParams(search).get('id');
  const dataUrl = contentUrl + id + '.json';

  const [storyData, setStoryData] = useState(null);

  useEffect(() => {
    fetchJsonByUrl(dataUrl)
      .then((data) => {
        setStoryData(data);
        dispatch(ActionSetCurrStoryId(data.id));
      })
      .catch((_err) => {
        console.warn('fetchData err:', _err);
      });
  }, [id]);

  return (
    <>
      {storyData ? (
        <div>
          <StoryComp data={storyData} />
          {storyData.kids?.map((c) => (
            <Comments
              key={c}
              commentId={c}
              type='top'
            />
          ))}
        </div>
      ) : (
        <p>Loading story data...</p>
      )}
    </>
  );
};
