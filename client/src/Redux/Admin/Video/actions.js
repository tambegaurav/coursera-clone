/* eslint-disable camelcase */
import axios from 'axios';
import {
  ADD_VIDEO_FAILURE,
  ADD_VIDEO_REQ,
  ADD_VIDEO_SUCCESS,
} from './actionTypes';

export const addVideoRequest = () => {
  return {
    type: ADD_VIDEO_REQ,
  };
};

export const addVideoSuccess = () => {
  return {
    type: ADD_VIDEO_SUCCESS,
  };
};

export const addVideoFailure = () => {
  return {
    type: ADD_VIDEO_FAILURE,
  };
};

export const addVideoToCourse = (payload) => (dispatch) => {
  dispatch(addVideoRequest());
  const { course_id } = payload;

  return axios
    .post(`http://localhost:5000/video/${course_id}/addvideo`, payload)
    .then((res) => {
      dispatch(addVideoSuccess());
      console.log(res);
      return res;
    })
    .catch((err) => {
      dispatch(addVideoFailure());
      console.log(err);
    });
};
