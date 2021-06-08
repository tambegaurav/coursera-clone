import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllCourses } from '../../Redux/Admin/Course/actions';

const AdminDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCourses());
  }, []);

  return <div>Dashboard</div>;
};

export default AdminDashboard;
