/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, Grid } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Rating } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
// import InputAdornment from '@material-ui/core/InputAdornment';
import top100Films from './data.js';
import styles from './Searchbar.module.css';

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
function Searchbar() {
  const [query, setQuery] = React.useState('');
  const [list, setList] = React.useState([]);
  const classes = useStyles();
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  // console.log(list);

  const handleSearch = () => {
    // console.log(query);
    const updated = options.filter((option) =>
      option.title.toLowerCase().includes(query?.toLowerCase()),
    );
    // console.log(query.toLowerCase(), updated[0].title);

    setQuery(query);
    setList(updated);
  };

  return (
    <div>
      <Autocomplete
        id="grouped-demo"
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
        )}
        onChange={(event, value) =>
          value ? setQuery(value.title) : setQuery('')
        }
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
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
            {list?.map((item) => (
              <div className={styles.list}>
                <div style={{ border: '1px solid black', width: '100%' }}>
                  <img src="" alt="img" />
                </div>
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 5 }}
                >
                  <h3>{item.title} </h3>
                  <p>{item.university} </p>
                  <p>{item.course ? 'Course' : 'Specialization'} </p>
                  <div>
                    <Grid
                      Grid
                      container
                      spacing={1}
                      style={{ marginTop: '20px' }}
                    >
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Searchbar;
