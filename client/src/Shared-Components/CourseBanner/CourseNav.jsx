import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  width: 100%;
  border-bottom: 1px solid grey;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 75%;
  margin: auto;
  gap: 20px;
  font-size: 20px;
  padding: 25px 0;

  & > a {
    text-decoration: none;
    color: grey;
  }
`;

const CourseNav = () => {
  return (
    <Cont>
      <Flex>
        <a href="#about">About</a>
        <a href="#instructors">Instructors</a>
        <a href="#syllabus">Syllabus</a>
        <a href="#reviews">Reviews</a>
        <a href="#enrollment">Enrollment</a>
        <a href="#options">Options</a>
        <a href="#faq">FAQ</a>
      </Flex>
    </Cont>
  );
};

export default CourseNav;
