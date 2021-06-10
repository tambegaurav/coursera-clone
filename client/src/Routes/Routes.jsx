/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CourseDetailsPage from '../Pages/CourseDetailsPage';
import Home from '../Pages/Home';
import { CourseMaterial } from '../Pages/CourseMaterialPage/CourseMaterial';
import AdminLogin from '../Pages/AdminLogin';
import AdminDashboard from '../Pages/AdminDashboard';
import CoursesList from '../Shared-Components/Searchbar/CoursesList';
import { NewCourseForm } from '../Pages/AdminNewCourseForm/NewCourseForm';
import AdminCoursePage from '../Pages/AdminCoursePage';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/browse/:category/:courseName">
          <CourseDetailsPage />
        </Route>
        <Route exact path="/courseMat">
          <CourseMaterial />
        </Route>
        <Route exact path="/search/query/:query">
          <CoursesList />
        </Route>
        //Admin Routes
        <Route exact path="/admin/login">
          <AdminLogin />
        </Route>
        <Route exact path="/admin/dashboard">
          <AdminDashboard />
        </Route>
        <Route exact path="/admin/newCourse">
          <NewCourseForm />
        </Route>
        <Route exact path="/admin/course/:id">
          <AdminCoursePage />
        </Route>
        <Route>
          <h1>404: Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
