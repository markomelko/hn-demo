import * as actionTypes from './actionTypes';

import {
  fetchTopStoryIds,
  fetchStories,
  getItemsFromArray,
} from '../utils/dataHandlers';

import { APP_DEFAULTS } from '../config/defaults';

const { PAGINATION } = APP_DEFAULTS;

/**
 * ActionGetStoriesData
 *
 * @param {array} storyIdArr
 * @param {bool} initialization
 *
 * @returns {function} dispatch
 */
export function ActionGetAndSetStoriesData(storyIdArr, initialization) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.ACTION_INIT_SET_LOADING,
    });

    dispatch(fetchStories(storyIdArr)).then((resp) => {
      if (resp.meta.requestStatus === 'fulfilled') {
        const { payload } = resp;

        dispatch({
          type: actionTypes.ACTION_SET_STORY_DATA,
          payload: {
            initialization,
            items: payload,
          },
        });
      } else {
        dispatch({ type: actionTypes.ACTION_FAILED_TO_INIT });
      }
    });
  };
}

/**
 * Get all current top 500 stories.
 *
 * @returns {function} dispatch
 */
export function ActionGetTopStoryIds() {
  return (dispatch) => {
    dispatch(fetchTopStoryIds()).then((resp) => {
      if (resp.meta.requestStatus === 'fulfilled') {
        const { payload } = resp;

        const initialItems = getItemsFromArray(payload, 0, PAGINATION);

        dispatch(ActionGetAndSetStoriesData(initialItems, true));

        dispatch({ type: actionTypes.ACTION_SET_STORIES, payload });
      } else {
        dispatch({ type: actionTypes.ACTION_FAILED_TO_INIT });
      }
    });
  };
}

/**
 * Keep track of currently open story IDs
 * @param {*} id 
 * @returns {function} dispatch
 */
export function ActionSetCurrStoryId(id) {
  return (dispatch) => {
    dispatch({ type: actionTypes.ACTION_CURRENT_STORY, payload: id });
  };
}
