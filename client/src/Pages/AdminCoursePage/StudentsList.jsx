/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-tag-spacing */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import axios from 'axios';
import useStyles from './styles';

let color = '';

export const StudentsList = () => {
  const { id } = useParams();

  const [students, setStudents] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get(`http://localhost:5000/user/usersByCourse/${id}`).then((res) => {
      setStudents(res.data.data);
    });
  }, []);

  return (
    <div>
      <Container className={classes.root}>
        <h1 className={classes.heading}> Students Enrolled </h1>

        <table className={classes.table}>
          <tr>
            <th className={classes.tableData}>Sr.No</th>
            <th className={classes.tableData}>Username</th>
            <th className={classes.tableData}>Firstname</th>
            <th className={classes.tableData}>Lastname</th>
            <th className={classes.tableData}>Email</th>
          </tr>
          {students?.map((student, ind) => {
            ind % 2 !== 0 ? (color = '#dddddd') : (color = 'white');
            return (
              <>
                <tr key={student._id} style={{ backgroundColor: color }}>
                  <td className={classes.tableData}>{ind + 1}</td>
                  <td className={classes.tableData}>{student.username}</td>
                  <td className={classes.tableData}>{student.first_name}</td>
                  <td className={classes.tableData}>{student.last_name}</td>
                  <td className={classes.tableData}>{student.email}</td>
                </tr>
              </>
            );
          })}
        </table>
      </Container>
    </div>
  );
};
