/* eslint-disable no-console */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import top100Films from './data.js';
import styles from './CoursesList.module.css';
import CoursesList from './CoursesList';

const useStyles = makeStyles(() => ({
  iconButton: {
    padding: 10,
  },
}));

function Searchbar() {
  const [query, setQuery] = React.useState('');
  const [list, setList] = React.useState([]);
  const [courses, setCourses] = React.useState([]);

  const classes = useStyles();

  // console.log(query);
  const options = courses.map((option) => {
    const firstLetter = option.course_name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  // console.log(courses, list);
  const handleSearch = () => {
    // console.log(query);
    const updated = options.filter((option) =>
      option.course_name.toLowerCase().includes(query?.toLowerCase()),
    );
    // console.log(query.toLowerCase(), updated[0].title);

    setQuery(query);
    setList(updated);
  };

  React.useEffect(() => {
    axios
      .get('http://localhost:5000/course/all')
      .then((res) => setCourses(res.data.data))
      .catch((err) => console.log('Error Occured', err));
  }, []);
  return (
    <div>
      <Autocomplete
        id="grouped-demo"
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
        )}
        onChange={(event, value) =>
          value ? setQuery(value.course_name) : setQuery('')
        }
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.course_name}
        style={{ width: 300 }}
        autoSelect={true}
        renderInput={(params) => (
          <div
            style={{
              display: 'flex',
              border: '1px solid black',
            }}
          >
            <TextField
              {...params}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              label="What do you want to Learn?"
              variant="filled"
            />
            <IconButton
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSearch}
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </div>
        )}
      />
      <br />
      <div>
        {list.length === 0 ? (
          <div className={styles.emptylist}>
            <h2>No Course Found.</h2>
            <p>Try Another Keyword</p>
          </div>
        ) : (
          <div>
            <CoursesList query={query} courses={list} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
