import * as actionTypes from './actionTypes';

const initState = {
  loaderActive: false,
  initializationFailed: false,
  lastRefresh: '',
  currOpenStory: '',
  storyIds: [],
  curTeasers: [],
};

export const appReducer = (state = initState, { type, payload } = {}) => {
  switch (type) {
    case actionTypes.ACTION_SET_STORIES:
      return {
        ...state,
        storyIds: [...payload],
        lastRefresh: Date.now(),
      };

    case actionTypes.ACTION_CURRENT_STORY:
      return {
        ...state,
        currOpenStory: payload,
      };


    case actionTypes.ACTION_FAILED_TO_INIT:
      return {
        ...state,
        initializationFailed: true,
      };

    case actionTypes.ACTION_SET_STORY_DATA:

      if (!payload.initialization) {
        const newArray = [...state.curTeasers, ...payload.items];
        return {
          ...state,
          curTeasers: [...newArray],
          loaderActive: false,
        };
      } else {
        return {
          ...state,
          curTeasers: [...payload.items],
          loaderActive: false,
        };
      }

    case actionTypes.ACTION_INIT_SET_LOADING:
      return {
        ...state,
        loaderActive: true,
      };

    default:
      return state;
  }
};

export default appReducer;
