import {
  GET_ALL_COURSES_FAILURE,
  GET_ALL_COURSES_SUCCESS,
  GET_ALL_COURSES_REQ,
  ADD_COURSE_REQ,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAILURE,
  GET_ALL_VIDEOS_PC_REQ,
  GET_ALL_VIDEOS_PC_SUCCESS,
  GET_ALL_VIDEOS_PC_FAILURE,
} from './actionTypes';

const init = {
  isLoading: false,
  isError: false,
  courses: [],
  videos: [],
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

    case ADD_COURSE_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ADD_COURSE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    case ADD_COURSE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case GET_ALL_VIDEOS_PC_REQ: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_ALL_VIDEOS_PC_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        videos: payload,
      };
    }

    case GET_ALL_VIDEOS_PC_FAILURE: {
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
