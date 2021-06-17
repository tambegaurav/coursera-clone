/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProfileBanner } from '../../Shared-Components/Profile/ProfileBanner/ProfileBanner';
import Navbar from '../../Shared-Components/Navbar';
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';

const Container = styled.div`
  width: 90%;
  margin: auto;

  & > h1 {
    color: #464646;
    margin: 20px;
  }
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const CourseBox = styled.div`
  width: 85%;
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

export const ProfilePage = () => {
  const enrolledCourses = useSelector(
    (state) => state.auth.user.enrolled_courses,
  );

  useDocumentTitle('Coursera | Profile');

  return (
    <div>
      <Navbar />
      <ProfileBanner />
      <Container>
        <h1>My Courses</h1>
        <Flex>
          {enrolledCourses?.map((course) => {
            return (
              <Link
                to={`/courseMat/${course._id}`}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                <CourseBox>
                  <div className="imgBox">
                    <img src={course.course_img} alt="" />
                  </div>
                  <div>
                    <h2>{course.course_name}</h2>
                    <div>
                      <p>Author: {course.author}</p>
                      <p>Category: {course.category}</p>
                    </div>
                    <div className="level-badge">{course.level}</div>
                  </div>
                </CourseBox>
              </Link>
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
