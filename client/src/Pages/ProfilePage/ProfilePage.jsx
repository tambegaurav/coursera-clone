/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ProfileBanner } from '../../Shared-Components/Profile/ProfileBanner/ProfileBanner';
import Navbar from '../../Shared-Components/Navbar';

const Container = styled.div`
  width: 80%;
  margin: auto;

  & > h1 {
    color: #113972;
    margin: 20px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CourseBox = styled.div`
  width: 40%;
  height: 230px;
  background-color: #e0e0e0;
  color: #113972;
  padding: 20px 30px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 20px;
  box-shadow: 2px 2px 5px #5c8dd3;
  cursor: pointer;

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
`;

export const ProfilePage = () => {
  const enrolledCourses = useSelector(
    (state) => state.auth.user.enrolled_courses,
  );
  return (
    <div>
      <Navbar />
      <ProfileBanner />
      <Container>
        <h1>My Courses</h1>
        <Flex>
          {enrolledCourses?.map((course) => {
            return (
              <CourseBox>
                <h2>{course.course_name}</h2>
                <h3>Level: {course.level}</h3>
                <div>
                  <p>Author: {course.author}</p>
                  <p>Category: {course.category}</p>
                </div>
              </CourseBox>
            );
          })}
          {enrolledCourses.length === 0 && (
            <div style={{ margin: '20px' }}>
              <h2>No Courses Enrolled. Please Enroll into one.</h2>
            </div>
          )}
        </Flex>
      </Container>
    </div>
  );
};
