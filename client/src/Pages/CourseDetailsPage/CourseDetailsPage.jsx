import React from 'react';
import CourseAbout from '../../Shared-Components/CourseAbout/CourseAbout';
import CourseBanner from '../../Shared-Components/CourseBanner/CourseBanner';
import CourseNav from '../../Shared-Components/CourseBanner/CourseNav';
import Navbar from '../../Shared-Components/Navbar';
import Syllabus from '../../Shared-Components/Syllabus/Syllabus';

const CourseDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <CourseBanner />
      <CourseNav />
      <CourseAbout />
      <hr />

      <Syllabus />
    </div>
  );
};

export default CourseDetailsPage;
