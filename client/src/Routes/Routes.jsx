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
import { ProfilePage } from '../Pages/ProfilePage/ProfilePage';
import { EditProfile } from '../Pages/EditProfile/EditProfile';
import SignupPage from '../Pages/SignupPage';
import CategoryCoursesPage from '../Pages/CategoryCoursesPage/CategoryCoursesPage';
import { StudentsList } from '../Pages/AdminCoursePage/StudentsList';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/browse/:category">
          <CategoryCoursesPage />
        </Route>
        <Route exact path="/browse/:category/:courseName">
          <CourseDetailsPage />
        </Route>
        <Route exact path="/courseMat/:id">
          <CourseMaterial />
        </Route>
        <Route exact path="/search/query/:query">
          <CoursesList />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
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
        <Route exact path="/admin/course/:id/students">
          <StudentsList />
        </Route>
        <Route exact path="/profile/:id">
          <ProfilePage />
        </Route>
        <Route exact path="/profileForm/:id">
          <EditProfile />
        </Route>
        <Route>
          <h1>404: Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
