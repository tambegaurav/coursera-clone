import {
  GET_COURSE_FAILURE,
  GET_COURSE_SUCCESS,
  GET_COURSE_REQ,
} from './actionTypes';

const init = {
  isLoading: false,
  isError: false,
  course: {},
};

export const courseDetailsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_COURSE_REQ: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_COURSE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        course: payload,
      };
    }

    case GET_COURSE_FAILURE: {
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
