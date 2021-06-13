import axios from 'axios';
import {
  GET_USER_FAILURE,
  SIGNIN_FAILURE,
  SIGNIN_REQ,
  SIGNIN_SUCCESS,
  GET_USER_REQ,
  GET_USER_SUCCESS,
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

export const getUserRequest = () => {
  return {
    type: GET_USER_REQ,
  };
};

export const getUserSuccess = (payload) => {
  return {
    type: GET_USER_SUCCESS,
    payload,
  };
};

export const getUserFailure = () => {
  return {
    type: GET_USER_FAILURE,
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
      dispatch(signinSuccess(res.data.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(signinFailure());
    });
};

export const getSignedInUser = (id) => (dispatch) => {
  dispatch(getUserRequest());
  return axios
    .get(`http://localhost:5000/user/${id}`)
    .then((res) => dispatch(getUserSuccess(res.data.data)))
    .catch((err) => {
      console.log(err);
      dispatch(getUserFailure());
    });
};
