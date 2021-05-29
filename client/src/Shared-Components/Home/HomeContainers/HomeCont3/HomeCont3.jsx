import React from 'react';
import { Box, Grid, Button } from '@material-ui/core';
import useStyle from './style';

export const HomeCont3 = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container justify="space-evenly">
        <Grid item>
          <Box className={classes.imgCont}>
            <img src="https://bit.ly/2SBq7lR" alt="img" />
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.textCont1}>
            <h2>World-class learning for you </h2>
          </Box>
          <Box className={classes.textCont2}>
            <p>
              Persue <strong> a promotion, a raise, or switch careers.</strong>
              <span className={classes.spanText}>
                <strong>89% of learners</strong>&nbsp;who have taken a
                course&nbsp;
                <strong>report</strong>
              </span>
              <span className={classes.spanText}>career benefits.</span>
            </p>
          </Box>
          <Box className={classes.textCont3}>
            <span className={classes.spanText}>
              <strong>- Coursera Learner Outcome Survey, India (2021)</strong>
            </span>
            <Box className={classes.BtnCont}>
              <Button variant="contained" size="large" className={classes.btn1}>
                Join for free
              </Button>
              <Button variant="outlined" size="large" className={classes.btn2}>
                Try coursera for business
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
