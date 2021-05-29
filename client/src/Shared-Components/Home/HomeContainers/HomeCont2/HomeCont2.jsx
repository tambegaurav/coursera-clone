import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import useStyles from './style';

export const HomeCont2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2 className={classes.heading}>Find your path to success</h2>
      <Container>
        <Grid container justify="space-evenly">
          <Grid item>
            <Box>
              <img src="https://bit.ly/3yL7sEP" alt="img" />
            </Box>
            <Box style={{ marginBottom: '16px', marginTop: '16px' }}>
              <span className={classes.spanHead}>
                <h3>Gain expertise</h3>
              </span>
              <span className={classes.spanHead}>
                <h3>in the latest skills</h3>
              </span>
            </Box>
            <Box>
              <span className={classes.spanSub}>with courses and</span>
              <span className={classes.spanSub}>Specialisations in</span>
              <span className={classes.spanSub}>computer science,</span>
              <span className={classes.spanSub}>humanities, and</span>
              <span className={classes.spanSub}>more</span>
            </Box>
          </Grid>

          <Grid item>
            <Box>
              <img src="https://bit.ly/3uvpCaj" alt="img" />
            </Box>
            <Box style={{ marginBottom: '16px', marginTop: '16px' }}>
              <span className={classes.spanHead}>
                <h3>Learn job-ready</h3>
              </span>
              <span className={classes.spanHead}>
                <h3>career skills</h3>
              </span>
            </Box>
            <Box>
              <span className={classes.spanSub}>in artificial</span>
              <span className={classes.spanSub}>intelligence, machine</span>
              <span className={classes.spanSub}>learning, data</span>
              <span className={classes.spanSub}>science, cloud</span>
              <span className={classes.spanSub}>engineering, and</span>
              <span className={classes.spanSub}>more</span>
            </Box>
          </Grid>

          <Grid item>
            <Box>
              <img src="https://bit.ly/3fqVetj" alt="img" />
            </Box>
            <Box style={{ marginBottom: '16px', marginTop: '16px' }}>
              <span className={classes.spanHead}>
                <h3>Earn a</h3>
              </span>
              <span className={classes.spanHead}>
                <h3>degree</h3>
              </span>
            </Box>
            <Box>
              <span className={classes.spanSub}>from the world&apos;s</span>
              <span className={classes.spanSub}>leading universities in</span>
              <span className={classes.spanSub}>business, computer</span>
              <span className={classes.spanSub}>science, and more</span>
            </Box>
          </Grid>

          <Grid item>
            <Box>
              <img src="https://bit.ly/3fwRmqN" alt="img" />
            </Box>
            <Box style={{ marginBottom: '16px', marginTop: '16px' }}>
              <span className={classes.spanHead}>
                <h3>Upskill your</h3>
              </span>
              <span className={classes.spanHead}>
                <h3>organization</h3>
              </span>
            </Box>
            <Box>
              <span className={classes.spanSub}>with on-demand</span>
              <span className={classes.spanSub}>training and</span>
              <span className={classes.spanSub}>development</span>
              <span className={classes.spanSub}>programs</span>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
