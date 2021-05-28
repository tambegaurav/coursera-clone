import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import useStyles from './styles';

export const HomeCont1 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <h2 className={classes.heading}>
          We collaborate with &nbsp;
          <a
            href="https://www.coursera.org/about/partners"
            style={{ color: 'rgb(0, 86, 210)', textDecoration: 'none' }}
          >
            200+ leading universities and companies
          </a>
        </h2>
      </Container>
      <Container style={{ marginTop: '50px', paddingBottom: '64px' }}>
        <Grid container justify="space-around">
          <Grid item lg={1}>
            <Box>
              <img
                className={classes.logoImg}
                src="https://bit.ly/3us9W7O"
                alt="logo-img"
              />
            </Box>
          </Grid>
          <Grid item lg={1}>
            <Box>
              <img
                className={classes.logoImg}
                src="https://bit.ly/3yI6n0p"
                alt="logo-img"
              />
            </Box>
          </Grid>
          <Grid item lg={1}>
            <Box width={75}>
              <img
                className={classes.logoImg}
                src="https://bit.ly/3yEfwY1"
                alt="logo-img"
              />
            </Box>
          </Grid>
          <Grid item lg={1}>
            <Box width={70}>
              <img
                className={classes.logoImg}
                src="https://bit.ly/2TkW7el"
                alt="logo-img"
              />
            </Box>
          </Grid>
          <Grid item lg={1}>
            <Box width={70}>
              <img
                className={classes.logoImg}
                src="https://bit.ly/3bZ2smn"
                alt="logo-img"
              />
            </Box>
          </Grid>
          <Grid item lg={1}>
            <Box>
              <img
                className={classes.logoImg}
                src="https://bit.ly/34nLBW0"
                alt="logo-img"
              />
            </Box>
          </Grid>
          <Grid item lg={1}>
            <Box>
              <img
                className={classes.logoImg}
                src="https://bit.ly/3yK5ch5"
                alt="logo-img"
              />
            </Box>
          </Grid>
          <Grid item lg={1}>
            <Box>
              <img
                className={classes.logoImg}
                src="https://bit.ly/3g7buz1"
                alt="logo-img"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
