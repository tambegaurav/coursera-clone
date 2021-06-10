import axios from 'axios';
import {
  GET_COURSE_FAILURE,
  GET_COURSE_SUCCESS,
  GET_COURSE_REQ,
} from './actionTypes';

export const getCourseReq = () => {
  return {
    type: GET_COURSE_REQ,
  };
};

export const getCourseSuccess = (payload) => {
  return {
    type: GET_COURSE_SUCCESS,
    payload,
  };
};

export const getCourseFailure = () => {
  return {
    type: GET_COURSE_FAILURE,
  };
};

export const fetchCourse = (category, courseName) => (dispatch) => {
  dispatch(getCourseReq());
  return axios
    .get(`http://localhost:5000/course/${category}/${courseName}`)
    .then((res) => {
      dispatch(getCourseSuccess(res.data.data[0]));
    })
    .catch((err) => {
      dispatch(getCourseFailure(err));
      console.log(err);
    });
};
