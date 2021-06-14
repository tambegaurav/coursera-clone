import axios from 'axios';
import {
  SIGNIN_FAILURE,
  SIGNIN_REQ,
  SIGNIN_SUCCESS,
  UPDATE_USER_REQ,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  LOGOUT_USER,
} from './actionTypes';

export const signinReq = () => {
  return {
    type: SIGNIN_REQ,
  };
};

export const signinSuccess = (payload) => {
  return {
    type: SIGNIN_SUCCESS,
    payload,
  };
};

export const signinFailure = () => {
  return {
    type: SIGNIN_FAILURE,
  };
};

export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQ,
  };
};

export const updateUserSuccess = (payload) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload,
  };
};

export const updateUserFailure = () => {
  return {
    type: UPDATE_USER_FAILURE,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const signin = (data) => (dispatch) => {
  dispatch(signinReq());
  return axios
    .post(`http://localhost:5000/user/login`, {
      username: data.username,
      password: data.password,
    })
    .then((res) => {
      console.log(res, 'veda');
      dispatch(signinSuccess(res.data.data[0]));
    })
    .catch((err) => {
      console.log(err);
      dispatch(signinFailure());
    });
};

export const updateUser = (id, payload) => (dispatch) => {
  dispatch(updateUserRequest());
  return axios
    .patch(`http://localhost:5000/user/${id}`, payload)
    .then((res) => {
      dispatch(updateUserSuccess(res.data.data));
      alert('Changes Saved!!');
    })
    .catch((err) => {
      dispatch(updateUserFailure());
      console.log(err);
    });
};
