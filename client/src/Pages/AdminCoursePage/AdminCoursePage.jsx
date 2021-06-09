/* eslint-disable spaced-comment */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { fetchAllVideosParticularCourse } from '../../Redux/Admin/Course/actions';

const ModalCont = styled.div`
  background-color: azure;
  width: 70%;
  display: grid;
  place-items: center;
  margin: auto;
  margin-top: 20%;
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
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

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
    }
  }, [courseId]);

  return (
    <div>
      <h1>AdminCoursePage</h1>

      <div>
        <Button variant="contained" onClick={handleOpen}>
          <h2>Add Video</h2>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalCont>
            <h1>Modal</h1>
            <FormBox>
              <TextField label="Video Title" variant="outlined" />
              <TextField label="Video Description" variant="outlined" />
              <TextField label="Video Url" variant="outlined" />
              <TextField label="Week Number" variant="outlined" />
              <Button variant="primary">
                <h2>Add Video to the Course</h2>
              </Button>
            </FormBox>
          </ModalCont>
        </Modal>
      </div>
    </div>
  );
};

export default AdminCoursePage;
