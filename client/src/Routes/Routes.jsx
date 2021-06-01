import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CourseDetailsPage from '../Pages/CourseDetailsPage';
import Home from '../Pages/Home';
import { CourseMaterial } from '../Pages/CourseMaterialPage/CourseMaterial';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:category/:id">
          <CourseDetailsPage />
        </Route>
        <Route exact path="/courseMat">
          <CourseMaterial />
        </Route>
        <Route>
          <h1>404: Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
