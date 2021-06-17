/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { TextField, Container, Button, Modal, Grid } from '@material-ui/core';
import styled from 'styled-components';
import { fetchAllVideosParticularCourse } from '../../Redux/Admin/Course/actions';
import { addVideoToCourse } from '../../Redux/Admin/Video/actions';
import VideoComponent from './VideoComponent';
import useStyles from './coursePageStyles';

const ModalCont = styled.div`
  background-color: azure;
  width: 70%;
  display: grid;
  place-items: center;
  margin: auto;
  margin-top: 150px;
  padding: 20px 10px;
  border-radius: 7px;
  padding-bottom: 0;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 20px;
  & > .MuiFormControl-root {
    width: 90%;
  }
`;

const AdminCoursePage = () => {
  const params = useParams();
  const [courseId, setCourseId] = useState('');
  const classes = useStyles();

  const [courseTitle, setCourseTitle] = useState('');

  const videos = useSelector((state) => state.course.videos);
  const [videoIds, setVideoIds] = useState([]);

  const dispatch = useDispatch();
  const initialVideoData = {
    title: '',
    video_url: '',
    description: '',
    week: '',
  };
  const [newVideoData, setNewVideoData] = useState(initialVideoData);

  const [open, setOpen] = React.useState(false);

  const handleNewVideoFormChange = (e) => {
    const { name, value } = e.target;

    setNewVideoData({
      ...newVideoData,
      [name]: value,
    });
  };

  const fetchVideoIdsArray = () => {
    return axios
      .get(`http://localhost:5000/course/${courseId}/videoids`)
      .then(({ data }) => {
        setVideoIds(data.data.video_ids);
      });
  };

  const handleAddVideo = () => {
    const payload = {
      ...newVideoData,
      week: Number(newVideoData.week),
      course_id: courseId,
    };
    dispatch(addVideoToCourse(payload))
      .then((res) => {
        alert('Video Added Successfully');
        const newVideoId = res.data.data._id;
        // setVideoIds([...videoIds, newVideoId]);
        videoIds.push(newVideoId);
      })
      .then(() => {
        axios
          .patch(`http://localhost:5000/course/${courseId}`, {
            video_ids: videoIds,
          })
          .then(() => fetchVideoIdsArray())
          .catch((err) => console.error(err));

        dispatch(fetchAllVideosParticularCourse(courseId));
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCourseId(params.id);
  }, [params]);

  useEffect(() => {
    if (courseId !== '') {
      dispatch(fetchAllVideosParticularCourse(courseId));

      fetchVideoIdsArray();
    }
  }, [courseId]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/course/${courseId}`)
      .then((res) => setCourseTitle(res.data.data.course_name));
  }, [courseId]);

  return (
    <Container className={classes.root} maxWidth="xl">
      <h1 className={classes.heading}>{courseTitle}</h1>

      <div>
        <Grid container justify="space-between" className={classes.btnGrid}>
          <Button
            variant="contained"
            onClick={handleOpen}
            color="primary"
            className={classes.btn}
          >
            <h2>Add Video</h2>
          </Button>
          <Button
            variant="contained"
            component={Link}
            color="primary"
            to={`/admin/course/${courseId}/students`}
            className={classes.btn}
          >
            <h2>See Students</h2>
          </Button>
        </Grid>
        <Grid container spacing={2} className={classes.videoGrid}>
          {videos.length > 0 ? (
            videos.map((video) => (
              <Grid item lg={6}>
                <VideoComponent key={video._id} video={video} />
              </Grid>
            ))
          ) : (
            <h2>No Videos Found. Add One</h2>
          )}
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalCont>
            <h1>Modal</h1>
            <FormBox>
              <TextField
                onChange={handleNewVideoFormChange}
                label="Video Title"
                variant="outlined"
                name="title"
              />
              <TextField
                onChange={handleNewVideoFormChange}
                label="Video Description"
                variant="outlined"
                name="description"
              />
              <TextField
                onChange={handleNewVideoFormChange}
                label="Video Url"
                variant="outlined"
                name="video_url"
              />
              <TextField
                onChange={handleNewVideoFormChange}
                label="Week Number"
                variant="outlined"
                name="week"
              />
              <Button variant="primary" onClick={handleAddVideo}>
                <h2>Add Video to the Course</h2>
              </Button>
            </FormBox>
          </ModalCont>
        </Modal>
      </div>
    </Container>
  );
};

export default AdminCoursePage;
