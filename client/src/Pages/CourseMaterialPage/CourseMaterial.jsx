import React from 'react';
// import { VidPlayer } from '../../Shared-Components/VideoPlayer/VidPlayer';
import { VideoSideBar } from '../../Shared-Components/VideoSideBar/VideoSideBar';
import Navbar from '../../Shared-Components/Navbar/Navbar';

export const CourseMaterial = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Navbar />
      <VideoSideBar />
      {/* <VidPlayer /> */}
    </div>
  );
};
