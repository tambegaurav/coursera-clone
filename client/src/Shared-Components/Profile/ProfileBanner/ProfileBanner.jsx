import React, { useState } from 'react';
import { Grid, IconButton, Avatar } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import PersonIcon from '@material-ui/icons/Person';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import useStyles from './styles';

export const ProfileBanner = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [user, setUser] = useState({});

  React.useEffect(() => {
    axios.get(`http://localhost:5000/user/${id}`).then((res) => {
      setUser(res.data);
    });
  }, []);

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
              {`${user.first_name} ${user.last_name}`}
            </h2>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
