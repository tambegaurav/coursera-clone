import React from 'react';
import { Container, Grid, Button, Hidden, Box } from '@material-ui/core';
import useStyles from './styles';

export const HomeBanner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container justify="space-evenly">
          <Grid
            item
            container
            justify="flex-start"
            alignItems="flex-start"
            direction="column"
            spacing={2}
            lg={6}
            xs={12}
            md={6}
            sm={6}
          >
            <Grid item style={{ marginTop: '20px', marginLeft: '25px' }}>
              <h1>
                <span className={classes.heroSpanHead}>Learn</span>
                <span className={classes.heroSpanHead}>Without</span>
                <span className={classes.heroSpanHead}>Limits</span>
              </h1>
            </Grid>
            <Grid item style={{ marginLeft: '25px' }}>
              <p>
                <span className={classes.heroSpanSub}>
                  Take the next step in your career with a world class learning
                </span>
                <span className={classes.heroSpanSub}>experience.</span>
              </p>
            </Grid>
            <Grid item style={{ marginLeft: '25px' }}>
              <Button
                variant="contained"
                className={`${classes.heroBtn} ${classes.mediumHeroBtn}`}
              >
                Join For Free
              </Button>
            </Grid>
          </Grid>
          <Grid item container justify="flex-end" lg={6} md={6} sm={6}>
            <Hidden only="xs">
              <Hidden only={['md', 'sm', 'xs']}>
                <Grid item style={{ marginRight: '10px' }}>
                  <Box height="100%">
                    <img
                      className={classes.heroImg}
                      src="https://bit.ly/2Sw2WJR"
                      alt="hero img"
                    />
                  </Box>
                </Grid>
              </Hidden>
              <Hidden only={['sm', 'xs', 'lg', 'xl']}>
                <Grid item style={{ marginRight: '10px' }}>
                  <Box height="75%" className={classes.mediumHeroImg}>
                    <img
                      className={classes.heroImg}
                      src="https://bit.ly/2Sw2WJR"
                      alt="hero img"
                    />
                  </Box>
                </Grid>
              </Hidden>
              <Hidden only={['xs', 'lg', 'xl', 'md']}>
                <Grid
                  item
                  style={{ marginRight: '10px' }}
                  className={classes.smallHeroImg}
                >
                  <Box height="50%" style={{ marginLeft: '40%' }}>
                    <img
                      className={classes.heroImg}
                      src="https://bit.ly/2Sw2WJR"
                      alt="hero img"
                    />
                  </Box>
                </Grid>
              </Hidden>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
