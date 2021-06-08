import axios from 'axios';
import {
  GET_ALL_COURSES_FAILURE,
  GET_ALL_COURSES_SUCCESS,
  GET_ALL_COURSES_REQ,
} from './actionTypes';

export const getAllCoursesReq = () => {
  return {
    type: GET_ALL_COURSES_REQ,
  };
};

export const getAllCoursesSuccess = (payload) => {
  return {
    type: GET_ALL_COURSES_SUCCESS,
    payload,
  };
};

export const getAllCoursesFailure = () => {
  return {
    type: GET_ALL_COURSES_FAILURE,
  };
};

export const fetchAllCourses = () => (dispatch) => {
  dispatch(getAllCoursesReq());

  return axios
    .get('http://localhost:5000/course/all')
    .then((res) => {
      dispatch(getAllCoursesSuccess(res.data.data));
    })
    .catch((err) => {
      dispatch(getAllCoursesFailure(err));
      console.log(err);
    });
};
