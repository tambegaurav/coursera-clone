import { loadData } from '../../utils/localStorage';
import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_REQ,
  UPDATE_USER_REQ,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  LOGOUT_USER,
  ENROLL_FAILURE,
  ENROLL_SUCCESS,
  ENROLL_REQ,
} from './actionTypes';

const userFromLocalStorage = loadData('courseraUser') || null;
const isAuthFromLocalStorage = loadData('isAuth') || false;

const init = {
  isLoading: false,
  isError: false,
  isAuth: isAuthFromLocalStorage,
  user: userFromLocalStorage,
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

    case ENROLL_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ENROLL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    }

    case ENROLL_FAILURE: {
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
