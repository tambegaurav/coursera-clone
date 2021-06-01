import React from 'react';
import { Box, Grid, Avatar, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import BreadCrumb from './BreadCrumb';
import useStyles from './style';

const CourseBanner = () => {
  const classes = useStyles();
  const color2 = '#021B79';
  const color3 = '#0056D2';

  return (
    <div
      className={classes.root}
      style={{
        background: `linear-gradient(to right bottom ,${color2},${color3} )`,
      }}
    >
      <div className={classes.bannerCont}>
        <BreadCrumb />
        <Grid container justify="space-between">
          <Grid item>
            <Box>
              <h1 className={classes.heading}>
                Full-Stack Web Development with React{' '}
              </h1>

              {/* Description Container ...here do truncate */}

              <p>
                <span className={classes.description}>
                  Build Complete Web and Hybrid Mobile Solutions. Master
                  front-end web, hybrid mobile app and server
                </span>
                <span className={`${classes.description} ${classes.descp}`}>
                  -side development in three comprehensive courses.
                </span>
              </p>

              {/* Rating Container */}
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
                  <p className={classes.ratingNum}>4.5</p>
                </Grid>
                <Grid item>
                  <p className={classes.totalRating}>6,232 ratings</p>
                </Grid>
              </Grid>

              {/* Instructor container */}
              <Grid
                container
                spacing={1}
                alignItems="center"
                style={{ marginTop: '20px' }}
              >
                <Grid item>
                  <Avatar alt="name" src="https://bit.ly/3p5nbtK" />
                </Grid>
                <Grid item>Jogesh K. Muppala</Grid>
              </Grid>

              {/* Enroll Button */}
              <Grid container style={{ marginTop: '20px' }}>
                <Grid item>
                  <Button variant="contained" className={classes.enrollBtn}>
                    Enroll For Free
                  </Button>
                </Grid>
              </Grid>

              {/* total enrolled   */}

              <Grid container style={{ marginTop: '20px' }}>
                <Grid item>
                  <strong>8,346</strong>
                  &nbsp; already,enrolled
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Course logo */}
          <Grid item>
            <Box>
              <img src="https://bit.ly/2R41spE" alt="course-logo" />
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CourseBanner;
