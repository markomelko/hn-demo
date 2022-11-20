import { createAsyncThunk } from '@reduxjs/toolkit';

const topStoriesUrl = import.meta.env.VITE_STORIES_ROOT;
const contentUrl = import.meta.env.VITE_CONTENT_ROOT;

/**
 * Fetch top story Ids and return them.
 * NOTE: see https://redux-toolkit.js.org/api/createAsyncThunk
 * 
 * @returns {Array} of story IDs
 */
export const fetchTopStoryIds = createAsyncThunk('fetchTopStoryIds', async () => {
  const data = await fetch(topStoriesUrl).then((r) => r.json((d) => d));
  return data;
});

/**
 * Fetch the needed stories by 'storyIdArr' id array.
 * 
 * TODO: handle reject
 * 
 * @property {Array} storyIdArr
 * @returns {Array} of story objects
 */
export const fetchStories = createAsyncThunk(
  'fetchStories',
  async (storyIdArr) => {
    let promisesArr = [];
    let respData = [];

    promisesArr = storyIdArr.map((storyId) => {
      let url = contentUrl + storyId + '.json';

      return new Promise((resolve, reject) => {
        fetch(url).then((d) => {
          resolve(d);
        });
      });
    });

    respData = await Promise.all(promisesArr)
      .then((res) => Promise.all(res.map((dat) => dat.json())))
      .then((dataReady) => {
        return dataReady;
      });

    /**
     * NOTE: There can be different types of data, type examples: 'job', 'story'
     * Add filter for 'respData', if e.g. 'job' types not wanted.
     */

    return respData;
  }
);


/**
 * getItemsFromArray.
 *
 * @param {*} arr items array
 * @param {*} start start index
 * @param {*} end end index
 *
 * @returns {Array} wanted items
 */
export const getItemsFromArray = (arr, start, end) => {
  let retArr = [];
  for (let i = start; i < end; i++) {
    if (arr[i] !== undefined) retArr.push(arr[i]);
  }
  return retArr;
};
