import React from 'react';
import styled from 'styled-components';
import { VidPlayer } from '../../Shared-Components/VideoPlayer/VidPlayer';
import { VideoSideBar } from '../../Shared-Components/VideoSideBar/VideoSideBar';
import Navbar from '../../Shared-Components/Navbar/Navbar';
import { NotesSideBar } from '../../Shared-Components/NotesSideBar/NotesSideBar';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 2fr;
`;

export const CourseMaterial = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Navbar />
      <Grid>
        <VideoSideBar />
        <VidPlayer />
        <NotesSideBar />
      </Grid>
    </div>
  );
};
