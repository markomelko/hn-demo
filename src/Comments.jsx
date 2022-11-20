import React, { useState, useEffect } from 'react';

import { fetchJsonByUrl } from './utils/dataHandlers';

import { CommentComp } from './UI/CommentComp';

const contentUrl = import.meta.env.VITE_CONTENT_ROOT;

/**
 * Get comments recursively.
 * Each comment could have childs.
 *
 * NOTE: requires some testing.
 *
 * @param {string} commentId
 * @param {string} type
 *
 * Required: {@link fetchJsonByUrl}
 *
 * @returns {React.ReactElement}
 */
export const Comments = ({ commentId, type }) => {
  const dataUrl = contentUrl + commentId + '.json';

  const [comData, setComData] = useState(null);

  let nestedComments = [];

  useEffect(() => {
    fetchJsonByUrl(dataUrl)
      .then((data) => {
        setComData(data);
      })
      .catch((_err) => {
        console.warn('fetchData err:', _err);
      });
  }, [commentId]);

  // If current comment has childs as kids
  if (comData && Object.hasOwn(comData, 'kids') && comData.kids.length > 0) {
    nestedComments = (comData.kids || []).map((comment) => {
      return (
        <Comments
          key={comment}
          commentId={comment}
          type='child'
        />
      );
    });
  }

  return (
    <>
      {comData ? (
        <>
          <CommentComp
            commentData={comData}
            child={type}
          />
          {nestedComments}
        </>
      ) : (
        ''
      )}
    </>
  );
};
