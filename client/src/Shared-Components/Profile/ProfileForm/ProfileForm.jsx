/* eslint-disable no-console */
/* eslint-disable spaced-comment */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import {
  Container,
  Paper,
  Grid,
  Button,
  Divider,
  TextField,
  Avatar,
} from '@material-ui/core';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from './styles';
import { updateUser } from '../../../Redux/Auth/actions';
import { storage } from '../../../utils/firebase';
// import { empStatus, expLevel, degrees } from './selectTagValues';

export const ProfileForm = () => {
  const classes = useStyles();
  document.body.style.backgroundColor = '#F5F5F5';
  const dispatch = useDispatch();
  const { id } = useParams();
  const [credentials, setCredentials] = useState({});
  const user = useSelector((authState) => authState.auth.user);
  const [newImg, setNewImg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSaveChanges = () => {
    dispatch(updateUser(id, { ...user, ...credentials }));
  };

  const handleUpdateProfilePic = () => {
    console.log(newImg);
    // Create a storage reference from our storage service
    const storageRef = storage.ref();
    // Create a child reference
    const randomId = uuid();
    const imagesRef = storageRef.child(`profilePicture/${randomId}`);
    // imagesRef now points to 'images'
    const uploadTask = imagesRef.put(newImg);
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
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);

          //patch req
          axios
            .put(`http://localhost:5000/user/${user._id}`, {
              ...user,
              profile_picture: downloadURL,
            })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => console.log(err));
        });
      },
    );
  };

  return (
    <div>
      <Container className={classes.root} maxWidth="lg">
        <Paper variant="outlined" className={classes.paper}>
          <Grid container direction="column">
            {/* Heading */}
            <Grid
              item
              container
              justify="space-between"
              alignItems="center"
              className={classes.grid}
            >
              <Grid item>
                <hp1 className={classes.heading}>Edit my profile</hp1>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  component={Link}
                  to={`/profile/${user._id}`}
                >
                  View Profile
                </Button>
              </Grid>
            </Grid>

            <Divider />

            {/* Introduction */}

            <Grid item container direction="column" className={classes.grid}>
              <Grid item>
                <h2 className={classes.intro}>Credentials</h2>
              </Grid>
              <Grid item>
                <p>
                  Let the Coursera community of other learners and instructors
                  recognize you.
                </p>
              </Grid>

              {/* First Name */}
              <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>First Name</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    defaultValue={user.first_name}
                    name="first_name"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              {/* Last Name */}
              <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Last Name</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    defaultValue={user.last_name}
                    name="last_name"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              {/* Username */}

              <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Username</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    defaultValue={user.username}
                    name="username"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              {/* Email */}

              <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Email</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    defaultValue={user.email}
                    name="email"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              {/* Password */}

              <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Password</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Change your password"
                    defaultValue=""
                    name="password"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              {/* Profile Photo */}
              <Grid
                item
                container
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Profile Photo</p>
                </Grid>
                <Grid item className={classes.value} container>
                  <Grid item>
                    {/* <Avatar variant="square" className={classes.avatar}>
                      <PersonIcon className={classes.personIcon} />
                    </Avatar> */}
                    {user.profile_picture ? (
                      <Avatar
                        alt=""
                        src={user.profile_picture}
                        className={classes.personIcon}
                        variant="square"
                      />
                    ) : (
                      <Avatar variant="square" className={classes.avatar}>
                        <PersonIcon className={classes.personIcon} />
                      </Avatar>
                    )}
                  </Grid>
                  <Grid item>
                    <input
                      type="file"
                      onChange={(e) => setNewImg(e.target.files[0])}
                      className={classes.chooseFileBtn}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.photoBtn}
                      onClick={handleUpdateProfilePic}
                    >
                      Upload a photo
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider />

            {/* Work Experience And Education */}

            {/* <Grid item container direction="column" className={classes.grid}>
              <Grid item>
                <h2 className={classes.intro}>Work Experience and Education</h2>
              </Grid>
              <Grid item>
                <p>
                  Tell us about your experience and education to get a
                  personalized learning experience with course recommendations.
                </p>
              </Grid> */}

            {/* Work Experience */}

            {/* <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Employment Status</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    select
                    className={classes.selectTag}
                  >
                    {empStatus.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid> */}

            {/* Employer */}
            {/* 
              <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Employer</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="if employed, tell us where you work"
                  />
                </Grid>
              </Grid> */}

            {/* Experience Level */}

            {/* <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Experience Level</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    select
                    className={classes.selectTag}
                  >
                    {expLevel.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid> */}

            {/* HIGHEST DEGREE */}

            {/* <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Highest Degree</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    select
                    className={classes.selectTag}
                  >
                    {degrees.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Divider /> */}

            {/* Save Changes */}

            <Grid item container direction="column" className={classes.grid}>
              <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.value}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.photoBtn}
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};
