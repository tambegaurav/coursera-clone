/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchAllCourses } from '../../Redux/Admin/Course/actions';
import CourseBox from './CourseBox';

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 85%;
  margin: auto;
  margin-top: 30px;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin-top: 30px;
  text-decoration: underline;
  color: #077c7c;
`;

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.course.courses);

  useEffect(() => {
    dispatch(fetchAllCourses());
  }, []);

  return (
    <div>
      <Heading>Dashboard</Heading>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/admin/newCourse"
      >
        Add New Course
      </Button>
      <CoursesGrid>
        {allCourses.map((el) => (
          <CourseBox key={el._id} course={el} />
        ))}
      </CoursesGrid>
    </div>
  );
};

export default AdminDashboard;
