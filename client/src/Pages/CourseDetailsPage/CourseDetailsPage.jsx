import React from 'react';
import CourseBanner from '../../Shared-Components/CourseBanner/CourseBanner';
import CourseNav from '../../Shared-Components/CourseBanner/CourseNav';
import Navbar from '../../Shared-Components/Navbar';

const CourseDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <CourseBanner />
      <CourseNav />
    </div>
  );
};

export default CourseDetailsPage;
