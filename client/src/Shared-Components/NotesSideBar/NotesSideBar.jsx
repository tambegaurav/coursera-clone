/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';

const TextArea = styled.textarea`
  width: 95%;
  height: 75vh;
  overflow-y: scroll;
  margin-bottom: 10px;
  font-size: 18px;
  padding: 10px;
  box-shadow: 0px 0px 15px #858585;
  border-radius: 7px;
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
    border-radius: 7px;
  }
`;

export const NotesSideBar = () => {
  const videoId = useSelector((state) => state.userVideo.videoId);
  const user = useSelector((authState) => authState.auth.user);

  const [editMode, setEditMode] = useState(false);

  const [note, setNote] = useState('');
  const [newEdit, setNewEdit] = useState('');

  const handleEdit = () => {
    setNewEdit(note);
    setEditMode(true);
  };

  const handleChange = (e) => {
    setNewEdit(e.target.value);
  };

  const handleSaveNote = () => {
    setNote(newEdit);
    setEditMode(false);
  };

  return (
    <MainWrapper>
      <h1>Notes Section</h1>

      {editMode ? (
        <TextArea
          placeholder="Write your notes here..."
          defaultValue={newEdit}
          onChange={handleChange}
          rows="100"
        />
      ) : (
        <ReactMarkdown className="markdown">
          {note === ''
            ? 'No Notes Written. Click on edit and you can start making notes.'
            : note}
        </ReactMarkdown>
      )}

      {editMode ? (
        <Button onClick={handleSaveNote} variant="contained" color="primary">
          Save Note
        </Button>
      ) : (
        <Button onClick={handleEdit} variant="contained" color="primary">
          Edit
        </Button>
      )}
    </MainWrapper>
  );
};
