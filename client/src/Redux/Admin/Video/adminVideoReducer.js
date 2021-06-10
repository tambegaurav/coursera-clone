/* eslint-disable no-unused-vars */
import {
  ADD_VIDEO_SUCCESS,
  ADD_VIDEO_REQ,
  ADD_VIDEO_FAILURE,
} from './actionTypes';

const init = {
  isLoading: false,
  isError: false,
};

export const adminVideoReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_VIDEO_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ADD_VIDEO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case ADD_VIDEO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
