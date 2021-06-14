import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_REQ,
  UPDATE_USER_REQ,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  LOGOUT_USER,
} from './actionTypes';

const init = {
  isLoading: false,
  isError: false,
  isAuth: false,
  user: null,
};

export const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case SIGNIN_REQ: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case SIGNIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload,
      };
    }

    case SIGNIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        user: null,
      };
    }

    case UPDATE_USER_REQ: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    }

    case UPDATE_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case LOGOUT_USER: {
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    }

    default: {
      return state;
    }
  }
};
