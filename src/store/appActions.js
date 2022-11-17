import * as actionTypes from './actionTypes';
import { fetchData, fetchStories } from '../utils/asyncData';

export function ActionGetStories() {
  return (dispatch) => {
    dispatch(fetchData()).then((resp) => {
      if (resp.meta.requestStatus === 'fulfilled') {
        const { payload } = resp;
        dispatch({ type: actionTypes.ACTION_SET_STORIES, payload });
      } else {
        // TODO: Test fail cases what app looks like
        dispatch({ type: actionTypes.ACTION_FAILED_TO_INIT });
      }
    });
  };
}

export function ActionGetStoryItems(initialization, stepValue, storyIdArr) {
  return (dispatch) => {
    dispatch(fetchStories(storyIdArr)).then((resp) => {
      if (resp.meta.requestStatus === 'fulfilled') {
        const { payload } = resp;
        if (initialization) {
          dispatch({
            type: actionTypes.ACTION_INIT_TEASERS,
            payload: {
              items: payload,
              stepValue,
            },
          });
        } else {
          dispatch({
            type: actionTypes.ACTION_UPDATE_TEASERS,
            payload: {
              items: payload,
              stepValue,
            },
          });
        }
      } // TODO: add another requestStatus handlings?
    });
  };
}
