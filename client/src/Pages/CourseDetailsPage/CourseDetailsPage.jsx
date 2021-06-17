/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CourseAbout from '../../Shared-Components/CourseAbout/CourseAbout';
import CourseBanner from '../../Shared-Components/CourseBanner/CourseBanner';
import CourseNav from '../../Shared-Components/CourseBanner/CourseNav';
import Navbar from '../../Shared-Components/Navbar';
import Syllabus from '../../Shared-Components/Syllabus/Syllabus';
import { fetchCourse } from '../../Redux/courseDetails/actions';
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';
import Spinner from '../../Shared-Components/Spinner';

const CourseDetailsPage = () => {
  const { category, courseName } = useParams();

  const dispatch = useDispatch();
  const course = useSelector((state) => state.courseDetails.course);
  const isLoading = useSelector((state) => state.courseDetails.isLoading);

  useDocumentTitle(`Coursera | ${course.course_name}`);

  React.useEffect(() => {
    dispatch(fetchCourse(category, courseName));
  }, [category, courseName]);

  if (isLoading) {
    return <Spinner />;
  }

  // eslint-disable-next-line no-unreachable
  return (
    <div>
      <Navbar />
      <CourseBanner course={course} />
      <CourseNav />
      <CourseAbout courseDetails={course.course_details} />
      <hr />
      <Syllabus course={course} />
    </div>
  );
};

export default CourseDetailsPage;
