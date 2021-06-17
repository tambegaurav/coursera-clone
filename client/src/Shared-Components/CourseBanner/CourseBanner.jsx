/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Grid, Avatar, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import BreadCrumb from './BreadCrumb';
import useStyles from './style';
import PaymentModal from '../PaymentModal/PaymentModal';

const ModalBox = styled.div`
  display: grid;
  place-items: center;
`;

const CourseBanner = ({ course }) => {
  const classes = useStyles();
  const color2 = '#021B79';
  const color3 = '#0056D2';
  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);

  const activeUser = useSelector((state) => state.auth.user);

  let isEnrolled = false;
  if (activeUser) {
    for (let i = 0; i < activeUser.enrolled_courses.length; i++) {
      if (activeUser?.enrolled_courses[i]._id === course._id) {
        isEnrolled = true;
        // console.log('Course is Already enrolled');
        break;
      }
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={classes.root}
      style={{
        background: `linear-gradient(to right bottom ,${color2},${color3} )`,
      }}
    >
      <div className={classes.bannerCont}>
        <BreadCrumb course={course} />
        <Grid container justify="space-between">
          <Grid item>
            <Box>
              <h1 className={classes.heading}>{course.course_name}</h1>

              {/* Description Container ...here do truncate */}
              {/* {JSON.stringify(activeUser)} */}
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
                    name="simple-controlled"
                    value={rating}
                    precision={0.1}
                    readOnly
                    size="small"
                  />
                </Grid>
                <Grid item>
                  <p className={classes.ratingNum}>{rating}</p>
                </Grid>
                <Grid item>
                  <p className={classes.totalRating}>
                    {Math.ceil(Math.random() * (4500 - 2500) + 2500)} ratings
                  </p>
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
                  <Avatar
                    alt="name"
                    src={
                      course.author_img
                        ? course.author_img
                        : 'https://bit.ly/3p5nbtK'
                    }
                    style={{ width: '50px', height: '50px' }}
                  />
                </Grid>
                <Grid item>{course.author}</Grid>
              </Grid>

              {/* Enroll Button */}
              <Grid container style={{ marginTop: '20px' }}>
                <Grid item>
                  {activeUser === null ? (
                    // implement login modal/msg
                    <Button variant="contained" className={classes.enrollBtn}>
                      Enroll
                    </Button>
                  ) : (
                    <Button
                      onClick={isEnrolled || !activeUser ? '' : handleOpen}
                      variant="contained"
                      className={classes.enrollBtn}
                    >
                      {isEnrolled ? 'Already Enrolled' : 'Enroll'}
                    </Button>
                  )}
                </Grid>
              </Grid>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                <ModalBox>
                  <PaymentModal
                    courseId={course._id}
                    handleClose={handleClose}
                  />
                </ModalBox>
              </Modal>

              {/* total enrolled   */}

              <Grid container style={{ marginTop: '20px' }}>
                <Grid item>
                  <strong>
                    {Math.ceil(Math.random() * (8500 - 5500) + 5500)}
                  </strong>
                  &nbsp; Already Enrolled
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
