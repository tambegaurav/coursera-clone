/* eslint-disable max-len */
import {
  GET_VIDEOS_REQUEST,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_FAILURE,
  GET_VIDEO_URL,
  GET_COURSENAME_REQ,
  GET_COURSENAME_SUCCESS,
  GET_COURSENAME_FAILURE,
  GET_VIDEO_TITLE,
  GET_VIDEO_ID,
} from './actionTypes';

const init = {
  isLoading: false,
  isError: false,
  videos: [],
  videoUrl:
    'https://masai-course.s3.ap-south-1.amazonaws.com/lecture/5435/material/88bade49e98db8790df275fcebb37a13/zoom_0.mp4',
  courseName: '',
  videoTitle: 'title',
  videoId: '',
};

export const userVideoReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_VIDEOS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_VIDEOS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        videos: payload,
      };
    }

    case GET_VIDEOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case GET_VIDEO_URL: {
      return {
        ...state,
        videoUrl: payload,
      };
    }

    case GET_VIDEO_TITLE: {
      return {
        ...state,
        videoTitle: payload,
      };
    }

    case GET_VIDEO_ID: {
      return {
        ...state,
        videoId: payload,
      };
    }

    case GET_COURSENAME_REQ: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_COURSENAME_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        courseName: payload.course_name,
      };
    }

    case GET_COURSENAME_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
