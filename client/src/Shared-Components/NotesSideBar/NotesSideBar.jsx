import React, { useEffect } from 'react';
import { Drawer, CssBaseline, List, Grid, ListItem } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import {
  getVideos,
  getVideoUrl,
  getCourseName,
} from '../../Redux/User/Video/actions';

export const NotesSideBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const videosArr = useSelector((state) => state.userVideo.videos);
  const courseName = useSelector((state) => state.userVideo.courseName);

  useEffect(() => {
    dispatch(getVideos('60bf461238ac40503ae6670b')).then(() =>
      dispatch(getCourseName('60bf461238ac40503ae6670b')),
    );
  }, []);

  const handleVideoUrl = (index) => {
    const url = videosArr[index].video_url;
    dispatch(getVideoUrl(url));
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <div className={classes.courseName}>
          <h2>{courseName}</h2>
        </div>
        <List>
          {videosArr.map((el, index) => (
            <ListItem
              button
              key={el.title}
              onClick={() => handleVideoUrl(index)}
            >
              <Grid container spacing={1}>
                <Grid item lg={2}>
                  <PlayCircleOutlineIcon style={{ color: 'black' }} />
                </Grid>
                <Grid item lg={10}>
                  <strong>Video:</strong>
                  &nbsp; {el.title}
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
      </main> */}
    </div>
  );
};
