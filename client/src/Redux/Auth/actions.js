import axios from 'axios';
import { SIGNIN_FAILURE, SIGNIN_REQ, SIGNIN_SUCCESS } from './actionTypes';

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
