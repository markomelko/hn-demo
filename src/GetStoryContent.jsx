import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { Comment } from './UI/Comment';
import { Story } from './UI/Story';

const contentUrl = import.meta.env.VITE_CONTENT_ROOT;

/**
 * Fetch data.
 * @property {string} url
 * @returns {Promise}
 */
const fetchData = async (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((r) => r.json())
      .then((d) => {
        resolve(d);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/**
 * Get full story content by storyId.
 * @returns {ReactElement}
 */
export const GetStory = () => {
  const { search } = useLocation();

  const id = new URLSearchParams(search).get('id');
  const dataUrl = contentUrl + id + '.json';

  const [storyData, setStoryData] = useState(null);

  useEffect(() => {
    fetchData(dataUrl)
      .then((data) => {
        setStoryData(data);
      })
      .catch((err) => {
        console.warn('Failed to fetch Story:', err);
      });
  }, []);

  return (
    <>
      {storyData ? (
        <div>
          <Story data={storyData} />
          {storyData.kids?.map((c) => (
            <GetComment
              key={c}
              commentId={c}
            />
          ))}
        </div>
      ) : (
        <div>Loading story...</div>
      )}
    </>
  );
};

/**
 * DEMO: Show top level of comments.
 * @property {number} commentId
 *
 * @returns {React.ReactElement}
 */
const GetComment = ({ commentId }) => {
  const dataUrl = contentUrl + commentId + '.json';

  const [commentData, setComment] = useState(null);

  useEffect(() => {
    fetchData(dataUrl)
      .then((data) => {
        setComment(data);
      })
      .catch((err) => {
        console.warn('Failed to fetch Comment:', err);
      });
  }, []);

  return (
    <>
      {commentData ? (
        <div>{<Comment commentData={commentData} />}</div>
      ) : (
        <div>Loading comments...</div>
      )}
    </>
  );
};
