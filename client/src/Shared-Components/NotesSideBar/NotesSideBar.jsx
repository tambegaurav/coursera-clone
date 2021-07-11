/* eslint-disable no-else-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import axios from 'axios';

const gfm = require('remark-gfm');

const TextArea = styled.textarea`
  width: 95%;
  height: 75vh;
  overflow-y: scroll;
  margin-bottom: 10px;
  font-size: 18px;
  padding: 10px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

const MainWrapper = styled.div`
  & > .markdown {
    width: 95%;
    height: 75vh;
    overflow-y: scroll;
    font-size: 18px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid grey;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
    background-color: #f8f8f8;
  }

  & .editBtns {
    background-color: #0156d1;
  }
`;

const NotesTitle = styled.div`
  font-size: 30px;
  background-color: #0156d1;
  color: white;
  width: 95%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding: 5px 10px;
  margin-top: 10px;
`;

export const NotesSideBar = () => {
  const videoId = useSelector((state) => state.userVideo.videoId);
  const user = useSelector((authState) => authState.auth.user);

  const [editMode, setEditMode] = useState(false);
  const [isNewNote, setIsNewNote] = useState(false);

  const [note, setNote] = useState('');
  const [newEdit, setNewEdit] = useState('');

  const getNoteFromDb = () => {
    axios
      .get(`http://localhost:5000/notes/get/${user._id}/${videoId}`)
      .then((res) => {
        return res.data.data;
      })
      .then((res) => {
        setNote(res.content);
        // console.log('get note', res);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = () => {
    setNewEdit(note);
    setEditMode(true);
  };

  const handleChange = (e) => {
    setNewEdit(e.target.value);
  };

  const saveIntoDB = () => {
    return axios
      .put(
        `http://localhost:5000/notes/patch/${user._id}/${videoId}`,
        {
          content: newEdit,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        },
      )
      .then((res) => {
        console.log(res.data.data);
        return res.data.data;
      })
      .then((res) => setNote(res.content))
      .catch((err) => console.log(err));
  };

  const handleSaveNote = () => {
    setEditMode(false);
    saveIntoDB();
  };

  useEffect(() => {
    console.log('Running');
    getNoteFromDb();
  }, [videoId]);

  return (
    <MainWrapper>
      <NotesTitle>Note Pad</NotesTitle>
      {editMode ? (
        <TextArea
          placeholder="Write your notes here..."
          defaultValue={newEdit}
          onChange={handleChange}
          rows="100"
        />
      ) : (
        <ReactMarkdown remarkPlugins={[gfm]} className="markdown">
          {note === ''
            ? 'No Notes Written. Click on edit and you can start making notes.'
            : note}
        </ReactMarkdown>
      )}

      {editMode ? (
        <Button
          className="editBtns"
          onClick={handleSaveNote}
          variant="contained"
          color="primary"
        >
          Save Note
        </Button>
      ) : (
        <Button
          className="editBtns"
          onClick={handleEdit}
          variant="contained"
          color="primary"
        >
          Edit
        </Button>
      )}
    </MainWrapper>
  );
};
