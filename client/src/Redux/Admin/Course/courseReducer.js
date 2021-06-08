import {
  GET_ALL_COURSES_FAILURE,
  GET_ALL_COURSES_SUCCESS,
  GET_ALL_COURSES_REQ,
} from './actionTypes';

const init = {
  isLoading: false,
  isError: false,
  courses: [],
};

export const courseReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_ALL_COURSES_REQ: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_ALL_COURSES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        courses: payload,
      };
    }

    case GET_ALL_COURSES_FAILURE: {
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
