/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import { fetchAllCourses } from '../../Redux/Admin/Course/actions';
import CourseBox from './CourseBox';

const Container = styled.div`
  & .MuiButtonBase-root {
    position: fixed;
    background-color: #0056d2;
    right: 3%;
    top: 90%;
    box-shadow: 2px 2px 10px #39393a;
    color: white;

    &:hover {
      background-color: #084aa7;
      box-shadow: 5px 2px 10px #5e5e5e;
    }
  }
`;

const CoursesGrid = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin-top: 30px;
  text-decoration: underline;
  color: #3a3a3a;
`;

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.course.courses);

  useEffect(() => {
    dispatch(fetchAllCourses());
  }, []);

  return (
    <Container>
      <Heading>Dashboard: Courses</Heading>
      <Tooltip title="Add New Course" classname="add-btn">
        <IconButton component={Link} to="/admin/newCourse" aria-label="add">
          <AddIcon />
        </IconButton>
      </Tooltip>
      <CoursesGrid>
        {allCourses.map((el) => (
          <CourseBox key={el._id} course={el} />
        ))}
      </CoursesGrid>
    </Container>
  );
};

export default AdminDashboard;
