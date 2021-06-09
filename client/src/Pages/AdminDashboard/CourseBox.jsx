/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px 15px;
  border-radius: 10px;
  box-shadow: 12px 15px 29px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 12px 15px 29px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 12px 15px 29px -8px rgba(0, 0, 0, 0.75);
  margin: 10px 25px;
  background-color: #077c7c;
  cursor: pointer;

  & h1 {
    color: #94e6e2;
  }

  & h2 {
    color: #f1f1f1;
  }

  & h3 {
    color: #53bd9a;
  }
`;

const CourseBox = ({ course }) => {
  const { _id, course_name, level, category, author } = course;
  const history = useHistory();
  const handleSelectCourse = () => {
    history.push(`/admin/course/${_id}`);
  };
  return (
    <Box onClick={handleSelectCourse}>
      <h1>{course_name}</h1>
      <h3>LEVEL: {level}</h3>
      <h3>CATEGORY: {category}</h3>
      <h2>By {author}</h2>
    </Box>
  );
};

export default CourseBox;
