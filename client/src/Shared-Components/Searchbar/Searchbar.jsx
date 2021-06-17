/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-console */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: 10,
    width: theme.spacing(5),
    height: theme.spacing(6),
  },
  icon: {
    marginTop: '70%',
    color: 'white',
  },
  iconBtnDiv: {
    background: '#0056D2',
    borderRadius: '0px 4px 4px 0px',
  },
}));

function Searchbar() {
  const [query, setQuery] = React.useState('');
  const [courses, setCourses] = React.useState([]);
  const history = useHistory();
  const classes = useStyles();

  const options = courses.map((option) => {
    const firstLetter = option.course_name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  const handleSearch = () => {
    const isPresent = courses.filter((course) => course.course_name === query);
    if (isPresent.length === 1) {
      console.log(isPresent[0].course_name);
      history.push(
        `/browse/${isPresent[0].category}/${isPresent[0].course_name}`,
      );
    } else {
      setQuery(query);
      history.push(`/search/query/${query}`);
    }
  };

  React.useEffect(() => {
    axios
      .get('http://localhost:5000/course/all')
      .then((res) => setCourses(res.data.data))
      .catch((err) => console.log('Error Occured', err));
  }, []);
  return (
    <div style={{ marginTop: 10 }}>
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
        style={{ width: 350, paddingLeft: 100 }}
        autoSelect={true}
        renderInput={(params) => (
          <div
            style={{
              display: 'flex',
              padding: '0 10px',
            }}
          >
            <TextField
              {...params}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What do you want to Learn?"
              variant="outlined"
              style={{ outline: 'none', borderBottom: 'none' }}
            />
            <div className={classes.iconBtnDiv}>
              <IconButton
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleSearch}
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon className={classes.icon} />
              </IconButton>
            </div>
          </div>
        )}
      />
      <br />
    </div>
  );
}

export default Searchbar;
