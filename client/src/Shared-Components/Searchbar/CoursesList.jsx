/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Grid, Divider } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Filters from '../Filters/Checkbox';
import useStyles from './CoursesListStyles.js';
import Navbar from '../Navbar/Navbar';
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';

// eslint-disable-next-line react/prop-types
const CoursesList = () => {
  useDocumentTitle('Coursera | Search');

  const classes = useStyles();
  const { query } = useParams();
  const history = useHistory();
  const [data, setData] = React.useState([]);
  const [Skip, setSkip] = React.useState(0);
  const [filters, setFilters] = React.useState([]);
  const [count, setCount] = React.useState(10);
  const [Limit, setLimit] = React.useState(5);
  const [page, setPage] = React.useState(1);
  const handleChange = (e, value) => {
    console.log(value);
    setPage(value);
  };
  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);

  const list = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      list.push(data[i][j]);
    }
  }

  const getData = (variables) => {
    axios
      .post('http://localhost:5000/course/getCourses', variables)
      .then((res) => {
        // console.log(res.data);
        setData(res.data.data);
        setCount(res.data.pages);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
      filters,
      query: query.toLowerCase(),
    };
    getData(variables);
  }, [filters, page]);

  const handleFilter = (filters1, category) => {
    console.log(filters1, category);
    setFilters(filters1);
  };

  const handleClick = (id) => {
    axios
      .get(`http://localhost:5000/course/${id}`)
      .then((res) => {
        const { category, course_name } = res.data.data;
        // console.log(category, course_name);
        history.push(`/browse/${category}/${course_name}`);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(id);
  };
  return (
    <div>
      <Navbar />
      <div className={classes.filter}>
        <h3 style={{ marginLeft: 100 }}>
          {`Showing  ${list.length} total results for  "${query}"`}{' '}
        </h3>
        <Filters handleFilter={(filters1) => handleFilter(filters1, 'Level')} />
      </div>
      {/* if filters len ===0 show all courses */}
      <div>
        {list.length === 0 ? (
          <div className={classes.emptylist}>
            <h2>No Course Found.</h2>
            <p>Try Another Filters</p>
          </div>
        ) : (
          <div>
            {list.slice((page - 1) * Limit, page * Limit).map((item) => (
              <>
                <div
                  aria-hidden="true"
                  className={classes.list}
                  onClick={() => handleClick(item._id)}
                  onKeyDown={() => handleClick(item._id)}
                >
                  <div className={classes.img}>
                    <img
                      style={{ width: '100%' }}
                      src={item.course_img || ''}
                      alt="img"
                    />
                  </div>
                  <div className={classes.info}>
                    <h3>{item.course_name} </h3>
                    <p>{item.author} </p>
                    <p>Course </p>
                    <div>
                      <Grid
                        Grid
                        container
                        spacing={1}
                        style={{ marginTop: '20px' }}
                      >
                        <Grid item>
                          <Rating
                            name="simple-controlled"
                            value={rating}
                            precision={0.1}
                            readOnly
                            size="small"
                          />
                        </Grid>
                        <Grid item>
                          <p className={classes.ratingNum}>
                            {rating} |
                            {Math.ceil(Math.random() * (8500 - 5500) + 5500)} K
                            students
                          </p>
                        </Grid>
                      </Grid>
                    </div>

                    <h4>Level: {item.level} </h4>
                  </div>
                </div>
                <Divider style={{ width: '70%', margin: 'auto' }} />
              </>
            ))}

            <div className={classes.pagination}>
              <Pagination
                count={count}
                page={page}
                onChange={handleChange}
                variant="outlined"
                shape="rounded"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesList;
