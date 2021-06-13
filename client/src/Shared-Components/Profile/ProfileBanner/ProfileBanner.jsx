import React from 'react';
import { Grid, IconButton, Avatar } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useStyles from './styles';

export const ProfileBanner = () => {
  const classes = useStyles();
  const user = useSelector((authState) => authState.auth.user);
  const space = ' ';

  return (
    <div className={classes.root}>
      <div className={classes.iconDiv}>
        <Grid container justify="flex-end">
          <Grid item>
            <IconButton
              size="large"
              className={classes.updateIconBtn}
              component={Link}
              to="/profileForm"
            >
              <CreateIcon size="large" className={classes.updateIcon} />
            </IconButton>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PersonIcon className={classes.personIcon} />
            </Avatar>
          </Grid>
          <Grid item>
            <h2 className={classes.userName}>
              {user[0].first_name + space + user[0].last_name}
            </h2>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
