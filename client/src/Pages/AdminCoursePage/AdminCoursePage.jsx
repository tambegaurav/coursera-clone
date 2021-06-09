/* eslint-disable spaced-comment */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllVideosParticularCourse } from '../../Redux/Admin/Course/actions';

const AdminCoursePage = () => {
  const params = useParams();
  const [courseId, setCourseId] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setCourseId(params.id);
  }, [params]);

  useEffect(() => {
    if (courseId !== '') {
      dispatch(fetchAllVideosParticularCourse(courseId));
    }
  }, [courseId]);

  return (
    <div>
      <h1>AdminCoursePage</h1>
    </div>
  );
};

export default AdminCoursePage;
