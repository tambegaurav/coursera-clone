/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Box = styled.div`
  width: 80%;
  background-color: #f8f8f8;
  color: #464646;
  padding: 20px 20px;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #5c8dd3;
  cursor: pointer;
  display: grid;
  grid-template-columns: 2fr 4fr;
  gap: 20px;

  & > .imgBox {
    border-radius: 7px;
    width: 100%;

    img {
      width: 100%;
    }
  }

  &:hover {
    box-shadow: 2px 2px 10px #71a7f3;
  }

  & h2 {
    font-size: 32px;
  }

  & h3 {
    font-size: 22px;
  }

  & p {
    font-size: 18px;
  }

  & .level-badge {
    background-color: #0156d1;
    color: white;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 7px;
    margin-top: 10px;
  }
`;

const CourseBox = ({ course }) => {
  const { _id, course_name, level, category, author, course_img } = course;
  const history = useHistory();
  const handleSelectCourse = () => {
    history.push(`/admin/course/${_id}`);
  };
  return (
    <Box onClick={handleSelectCourse}>
      <div className="imgBox">
        <img src={course_img} alt="" />
      </div>
      <div>
        <h2>{course_name}</h2>
        <div>
          <p>Author: {author}</p>
          <p>Category: {category}</p>
        </div>
        <div className="level-badge">{level}</div>
      </div>
    </Box>
  );
};

export default CourseBox;
