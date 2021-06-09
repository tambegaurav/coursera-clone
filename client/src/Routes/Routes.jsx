/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Searchbar from '../Shared-Components/Searchbar/Searchbar';
import CourseDetailsPage from '../Pages/CourseDetailsPage';
import Home from '../Pages/Home';
import { CourseMaterial } from '../Pages/CourseMaterialPage/CourseMaterial';
import AdminLogin from '../Pages/AdminLogin';
import AdminDashboard from '../Pages/AdminDashboard';
import Searchbar from '../Shared-Components/Searchbar/Searchbar';
import CoursesList from '../Shared-Components/Searchbar/CoursesList';

const Routes = () => {
  return (
    <div>
      <Searchbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/browse/:category/:id">
          <CourseDetailsPage />
        </Route>
        <Route exact path="/courseMat">
          <CourseMaterial />
        </Route>
        //Admin Routes
        <Route exact path="/admin/login">
          <AdminLogin />
        </Route>
        <Route exact path="/admin/dashboard">
          <AdminDashboard />
        </Route>
        <Route exact path="/search/query/:query">
          <CoursesList />
        </Route>
        <Route>
          <h1>404: Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
