import axios from 'axios';
import {
  GET_ALL_COURSES_FAILURE,
  GET_ALL_COURSES_SUCCESS,
  GET_ALL_COURSES_REQ,
  ADD_COURSE_REQ,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAILURE,
  GET_ALL_VIDEOS_PC_FAILURE,
  GET_ALL_VIDEOS_PC_REQ,
  GET_ALL_VIDEOS_PC_SUCCESS,
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

export const addCourseRequest = () => {
  return {
    type: ADD_COURSE_REQ,
  };
};

export const addCourseSuccess = () => {
  return {
    type: ADD_COURSE_SUCCESS,
  };
};

export const addCourseFailure = () => {
  return {
    type: ADD_COURSE_FAILURE,
  };
};

export const getAllVideosPCReq = () => {
  return {
    type: GET_ALL_VIDEOS_PC_REQ,
  };
};

export const getAllVideosPCSuccess = (payload) => {
  return {
    type: GET_ALL_VIDEOS_PC_SUCCESS,
    payload,
  };
};

export const getAllVideosPCFailure = () => {
  return {
    type: GET_ALL_VIDEOS_PC_FAILURE,
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

export const fetchAllVideosParticularCourse = (courseId) => (dispatch) => {
  dispatch(getAllVideosPCReq());
  return axios
    .get(`http://localhost:5000/video/${courseId}/videos`)
    .then((res) => {
      dispatch(getAllVideosPCSuccess(res.data.data));
    })
    .catch((err) => {
      dispatch(getAllVideosPCFailure(err));
      console.log(err);
    });
};

export const addCourse = (payload) => (dispatch) => {
  dispatch(addCourseRequest());

  return axios
    .post('http://localhost:5000/course/addcourse', payload)
    .then((res) => {
      dispatch(addCourseSuccess());
      console.log(res);
    })
    .catch((err) => {
      dispatch(addCourseFailure());
      console.log(err);
    });
};
