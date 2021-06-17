/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  MenuItem,
  Button,
} from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { categories, levels, obj } from './SelectTagValues';
import { addCourse } from '../../Redux/Admin/Course/actions';
import fileUpload from '../../CustomHooks/fileUpload';
import { storage } from '../../utils/firebase';

export const NewCourseForm = () => {
  const classes = useStyles();
  const [formdata, setFormdata] = useState(obj);
  const [file, setFile] = useState(null);
  const [authorImg, setAuthorImg] = useState(null);
  const { course_name, course_details, author, level, category } = formdata;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async () => {
    // Create a storage reference from our storage service
    const storageRef = storage.ref();
    // Create a child reference
    const id = uuid();
    const imagesRef = storageRef.child(`images/${id}`);
    // imagesRef now points to 'images'
    const uploadTask = imagesRef.put(file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // eslint-disable-next-line prefer-template
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        uploadTask.snapshot.ref.getDownloadURL().then((courseUrl) => {
          const newId = uuid();
          const authorRef = storageRef.child(`authors/${newId}`);
          // imagesRef now points to 'images'
          const uploadAuthorTask = authorRef.put(authorImg);
          uploadAuthorTask.on(
            'state_changed',
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              // eslint-disable-next-line prefer-template
              console.log('Upload is ' + progress + '% done');
            },
            (error) => {
              // Handle unsuccessful uploads
              console.log(error);
            },
            () => {
              // Handle successful uploads on complete
              uploadAuthorTask.snapshot.ref
                .getDownloadURL()
                .then((authorUrl) => {
                  console.log(courseUrl);
                  console.log(authorUrl);

                  dispatch(
                    addCourse({
                      ...formdata,
                      course_img: courseUrl,
                      author_img: authorUrl,
                    }),
                  ).then(() => alert('Course Added'));
                });
            },
          );
        });
      },
    );
  };

  const handleFileSelect = (e) => {
    const img = e.target.files[0];
    setFile(img);
  };

  const handleAuthorImgSelect = (e) => {
    const authorImgFile = e.target.files[0];
    setAuthorImg(authorImgFile);
  };

  return (
    <div>
      <Container className={classes.root}>
        <Typography color="primary" variant="h4" className={classes.heading}>
          Add New Course
        </Typography>
        <Container className={`${classes.formCont}`}>
          <Paper className={classes.paper}>
            <form onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={2}>
                <Grid item lg={6}>
                  <TextField
                    fullWidth
                    placeholder="course name"
                    label="course name"
                    required
                    variant="outlined"
                    name="course_name"
                    value={course_name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    fullWidth
                    placeholder="professor's name"
                    label="professor's name"
                    required
                    variant="outlined"
                    name="author"
                    value={author}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item lg={6} className={classes.selectTag}>
                  <TextField
                    fullWidth
                    placeholder="category"
                    label="course category"
                    select
                    value={category}
                    required
                    variant="outlined"
                    name="category"
                    onChange={handleChange}
                  >
                    {categories.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={6} className={classes.selectTag}>
                  <TextField
                    fullWidth
                    placeholder="course level"
                    label="course level"
                    select
                    value={level}
                    required
                    variant="outlined"
                    name="level"
                    onChange={handleChange}
                  >
                    {levels.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={12}>
                  <TextField
                    fullWidth
                    placeholder="course description"
                    label="course description"
                    multiline
                    required
                    variant="outlined"
                    name="course_details"
                    value={course_details}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item lg={12}>
                  <label htmlFor="">Course Img :</label>{' '}
                  <input type="file" required onChange={handleFileSelect} />
                </Grid>
                <Grid item lg={12}>
                  <label htmlFor="">Author Img :</label>{' '}
                  <input
                    type="file"
                    required
                    onChange={handleAuthorImgSelect}
                  />
                </Grid>
                <Grid item lg={12} container justify="flex-end">
                  <Grid item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={handleSubmit}
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Container>
    </div>
  );
};
