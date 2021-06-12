/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 8,
    height: 320,
    maxHeight: 400,
    border: '1px solid black',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '5px 8px #cfd8dc',
    },
  },
  media: {
    height: 150,
  },
});

export default function Course({ course }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://png.pngtree.com/thumb_back/fh260/background/20201023/pngtree-technological-background-vector-illustration-matrix-binary-computer-code-image_432632.jpg"
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
            {course.course_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            University
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
