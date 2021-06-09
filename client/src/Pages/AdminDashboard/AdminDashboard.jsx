import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllCourses } from '../../Redux/Admin/Course/actions';

const AdminDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCourses());
  }, []);

  return (
    <>
      <div>Dashboard</div>
      <div>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/admin/newCourse"
        >
          Add New Course
        </Button>
      </div>
    </>
  );
};

export default AdminDashboard;
