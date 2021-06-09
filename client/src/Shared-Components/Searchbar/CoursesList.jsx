/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Filters from '../Filters/Checkbox';
import styles from './CoursesList.module.css';

const useStyles = makeStyles(() => ({
  iconButton: {
    padding: 10,
  },
  ratingNum: {
    color: 'rgb(247, 187, 86)',
    fontWeight: '600',
    fontSize: '15px',
  },
  totalRating: {
    fontWeight: 'normal',
    fontSize: '15px',
  },
}));

// eslint-disable-next-line react/prop-types
const CoursesList = ({ query, courses }) => {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  // eslint-disable-next-line no-unused-vars
  const [Skip, setSkip] = React.useState(0);
  // eslint-disable-next-line no-unused-vars
  const [Limit, setLimit] = React.useState(0);
  const [filters, setFilters] = React.useState([]);

  let list = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.length; i++) {
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < data[i].length; j++) {
      list.push(data[i][j]);
    }
  }
  if (filters.length === 0) {
    list = courses;
    // console.log(courses);
  }
  // console.log(list);

  const getData = (variables) => {
    axios
      .post('http://localhost:5000/course/getCourses', variables)
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    const variables = { skip: Skip, limit: Limit, filters, query };
    if (filters.length !== 0) {
      getData(variables);
    } else {
      list = courses;
    }
  }, [filters]);

  const handleFilter = (filters1, category) => {
    console.log(filters1, category);
    setFilters(filters1);
  };

  return (
    <div>
      {/* if filters len ===0 show all courses */}
      {list?.map((item) => (
        <div className={styles.list}>
          <div style={{ border: '1px solid black', width: '100%' }}>
            <img src="" alt="img" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <h3>{item.course_name} </h3>
            <p>{item.author} </p>
            <p>Course </p>
            <div>
              <Grid Grid container spacing={1} style={{ marginTop: '20px' }}>
                <Grid item>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                </Grid>
                <Grid item>
                  <p className={classes.ratingNum}>
                    {item.rating} | {item.students}K students
                  </p>
                </Grid>
              </Grid>
            </div>

            <h4>Level: {item.level} </h4>
          </div>
        </div>
      ))}
      <div>
        <Filters handleFilter={(filters1) => handleFilter(filters1, 'Level')} />
      </div>
    </div>
  );
};

export default CoursesList;
