import * as actionTypes from './actionTypes';

const initState = {
  startFail: false,
  lastRefresh: '',
  teasersCount: 0,
  topStories: [],
  curTeasers: [],
  curOpenStoryId: '',
};

export const appReducer = (state = initState, { type, payload } = {}) => {
  switch (type) {
    case actionTypes.ACTION_SET_STORIES:
      return {
        ...state,
        topStories: [...payload],
        lastRefresh: Date.now(),
      };

    case actionTypes.ACTION_FAILED_TO_INIT:
      return {
        ...state,
        startFail: true,
      };

    case actionTypes.ACTION_INIT_TEASERS:
      return {
        ...state,
        teasersCount: payload.stepValue,
        curTeasers: [...payload.items],
      };

    case actionTypes.ACTION_UPDATE_TEASERS:
      const newTeasersArr = [...state.curTeasers, ...payload.items]
      return {
        ...state,
        teasersCount: payload.stepValue,
        curTeasers: [...newTeasersArr],
      };

    default:
      return state;
  }
};

export default appReducer;
